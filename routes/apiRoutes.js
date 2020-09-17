const key = process.env.key;
const secret = process.env.secret;

let token = '';
const { exec } = require('child_process');
const User = require('../models/user');
const Forum = require("../models/forum");
const Profile = require("../models/profile");
const Login = require("../models/login");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function (user, password, done) {
        console.log("--------");
        console.log(user, password);
        User.getUserByUsername(user, function (err, user) {
            if (err) throw err;
            if (!user) {
                console.log("no user"); 
                return done(null, false, { message: 'Unknown User' });
            }
            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    console.log(user); 
                    return done(null, user);
                } else {
                    console.log(password, user); 
                    return done(null, false, { message: 'Invalid password' });
                }
            })
        });
    }));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        console.log(user); 
        done(err, user);
    });
});

module.exports = function (app) {

    app.post("/api/search", function (req, res) {
        console.log("hi");

        exec(`curl -d "grant_type=client_credentials&client_id=${key}&client_secret=${secret}" https://api.petfinder.com/v2/oauth2/token`, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                return;
            }
            token = JSON.parse(stdout).access_token;
            console.log(token);
            exec(`curl -H "Authorization: Bearer ${token}" GET https://api.petfinder.com/v2/animals?type=${req.body.pet}&breed=${req.body.breed}&location=${req.body.location}&range=${req.body.range}&gender=${req.body.gender}&age=${req.body.age}&size=${req.body.size}`, (err, stdout, stderr) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.send(JSON.parse(stdout));
            });
        });


    });


    app.post("/api/user", function (req, res) {
        console.log("Signing up a new user");
        console.log(req.body);
        // res.send("get users");
        // user = new User({
        //     firstname: req.body.firstname,
        //     lastname: req.body.lastname,  
        //     email: req.body.email, 
        //     password: req.body.password,
        // })
        // user.save(function (err, user) {
        //     console.log("signup working");
        //     if (err) { return (err) }
        //     res.json(201, user)
        // })
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;
        req.checkBody("firstname", "First name is required").notEmpty();
        req.checkBody("lastname", "Last name is required").notEmpty();
        req.checkBody("email", "Email is required").notEmpty();
        req.checkBody("password", "Password is required").notEmpty();
        req.checkBody("email", "Email is not valid").isEmail();


        const errors = req.validationErrors();
        if (errors) {
            res.send("Did not work");
        } else {
            var newUser = new User({
                firstname,
                lastname,
                email,
                password
            });
            //can change getUserbyEmail throughout code (models/userjs too)
            User.getUserByUsername(email, function (err, user) {
                if (err) throw err;
                if (!user) {
                    User.createUser(newUser, function (err, user) {
                        if (err) throw err;
                        console.log(user);
                    });
                    // req.flash('success_msg', 'You are registered and can now log in');
                    res.redirect('/api/login');
                } else {
                    // req.flash('error_msg', 'Email already exists');
                    res.redirect('/api/user');
                }
            });
        }
    });

    // app.get("/api/login", function (req, res) {
    //     // res.renderer("login");
    //     console.log("you are logged in");

    // });

    app.post("/api/login",

        passport.authenticate('local', {
            failureRedirect: '/failure'
        }),
        function (req, res) {
            console.log("-------------:)");
            // console.log(req); 
            res.send('success');
        });
    // );



    app.post("/api/forum", function (req, res) {
        console.log("Creating a new blog post.");
        console.log(req.body);
        forum = new Forum({
            name: req.body.name,
            posttitle: req.body.posttitle,
            postbody: req.body.postbody
        })
        forum.save(function (err, forum) {
            console.log("There's an error!");
            if (err) {
                return (err)
            }
            res.json(201, forum)
        })
    });

    app.post("/api/profile", function (req, res) {
        console.log("Editing user profile");
        console.log(req.body);
        profile = new Profile({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            useravatar: req.body.useravatar,
        })
        profile.save(function (err, profile) {
            console.log("the error is here");
            if (err) { return (err) }
            res.json(201, profile)
        })
    });

}

// var User = require('mongoose').model('User');
// exports.create = function(req, res, next) {
//     var user = new User(req.body);
//     user.save(function(err) {
//         if (err) {
//             return next(err);
//         } else {
//             res.json(user);
//         }
//     });
// };


// app.post('/api/posts', function (req, res, next) {
//   var post = new Post({
//     username: req.body.username,
//     body: req.body.body
//   })
//   post.save(function (err, post) {
//     if (err) { return next(err) }
//     res.json(201, post)
//   })
// })
