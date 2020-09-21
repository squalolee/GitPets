const key = process.env.key;
const secret = process.env.secret;

let token = '';
const { exec } = require('child_process');
const User = require('../models/user');
const Forum = require("../models/forum");
// const Profile = require("../models/profile");
const Login = require("../models/login");
const passport = require("passport");
const ResultsCard = require('../models/resultscard');
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
                    // res.redirect('/api/profile');
                    // res.send('success'); 
                } else {
                    // req.flash('error_msg', 'Email already exists');
                    // res.redirect('/api/user');
                    res.redirect('/api/profile');
                    // res.redirect('/api/login');

                }
            });

            
        }
    });

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
        //update User info in profile
        User.updateOne({ firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, password: req.body.password }, function (err, user) {
            console.log("updating user info"); 
            res.send(user); 
            if (err) {
                console.log(err); 
            }
        });
    });

    //to check if animal is already saved in database
    //if/else statement
    //if id already in database, then return to user ("already saved!")
    //if id is not already in database, then continue with favorite.save to save that animal to db

    app.post("/api/favorite", function (req, res) {
        console.log("saving as new favorite!"); 
        ResultsCard.findOne({ searchid: req.body.searchid }, function (err, result) {
            console.log(result); 
            if (!result) {
                favorite = new ResultsCard({
                    favorite: req.body.favorite, 
                    searchid: req.body.searchid
                })
                favorite.save(function (err, favorite) {
                    console.log("save"); 
                    if (err) { return (err) }
                    res.status(status).json(obj);
                })
            }
            else {
                if (req.body.favorite === false) {
                    ResultsCard.updateOne({ _id: result._id }, {favorite: false}, function (err, animal) {
                        console.log(animal); 
                        res.send("animal set to false"); 
                    })
                }
                else {
                    console.log(req.body); 
                    //return results for initial render
                }
            }
        }) 
        
    });

}

