const key = process.env.key;
const secret = process.env.secret;
let token = '';
const { exec } = require('child_process');
const Signup = require('../models/signup');
const Forum = require("../models/forum");
const Profile = require("../models/profile");

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

    
    app.post("/api/signup", function (req, res) {
        console.log("Signing up a new user");
        console.log(req.body);
        // res.send("get users");
        signup = new Signup({
            firstname: req.body.firstname,
            lastname: req.body.lastname,  
            email: req.body.email, 
            password: req.body.password,
        })
        signup.save(function (err, signup) {
            console.log("the error is here");
            if (err) { return (err) }
            res.json(201, signup)
        })
    });

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
