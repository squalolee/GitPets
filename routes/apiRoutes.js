const key = process.env.key;
const secret = process.env.secret;
let token = '';
const { exec } = require('child_process');
const Signup = require('../models/signup');
var signup = ""; 

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
        res.send("get users");
        signup = new Signup({
            firstname: req.body.firstname,
            lastname: req.body.lastname,  
            email: req.body.email, 
            password: req.body.password,
        })
        post.save(function (err, signup) {
            console.log("the error is here");
            if (err) { return (err) }
            res.json(201, signup)
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
