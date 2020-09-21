process.env.NODE_ENV !== "production" && require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const path = require("path");
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const session = require("express-session");
const MongoStore = require('connect-mongo')(session)
const expressValidator = require('express-validator');
// const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.bodyParser());

//mongodb atlas
//mLab no longer available, only other app is ObjectRocket which is not free
//need to find a way to connect heroku app with mongo
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://napsche:${process.env.dbpassword}@gitpets2.dqoov.mongodb.net/gitpets?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// passport.use(new LocalStrategy(
//   function(email, password, done) {
//     User.findOne({ email: email }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

//resave
  //false will not resave to the session store unless modified
    //modified=adding property to req.session or changing variable value

//saveUninitialized
  //uninitialized session is an unmodified one
  //false, session won't be saved unless we modify it, won't sesnd id back to browser

  //demo says to set both these values to false, but for us it makes more sense to be true?? 

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use( (req, res, next) => {
  console.log('req.session', req.session); 
  return next(); 
}); 


app.post("/user", (req, res) => {
  console.log('user signup');
  //we use email instead of username
  req.session.username = req.body.email; 
  res.end()
})

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      const namespace = param.split('.'),
          root = namespace.shift(),
          formParam = root;
      while(namespace.length) {
          formParam += '[' + namespace.shift() + ']';
      }
      return {
          param: formParam,
          msg: msg,
          value: value
      };
  }
}));
 

// passport.serializeUser(function(user, done) {
//   console.log("serializeUser"); 
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

routes(app);
// app.use(routes(app)); 


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("client/build"));
app.get('*', (req,res) =>{  res.sendFile(path.join(__dirname+'/client/build/index.html'));});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || uri);
// Start the API server
app.listen(PORT, function() {
  console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
});