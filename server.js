process.env.NODE_ENV !== "production" && require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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


routes(app);
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