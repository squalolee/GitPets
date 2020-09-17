const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); 

const Schema = mongoose.Schema;
const userSchema = new Schema({
   firstname: { type: String, required: true},
   lastname: { type: String, required: true},
   email: { type: String, required: true, unique: true},
   password: { type: String, required: true}
});
const User = mongoose.model("User", userSchema);
module.exports = User;

module.exports.createUser = function(newUser, callback) {
   bcrypt.genSalt(10, function(err, salt) {
       bcrypt.hash(newUser.password, salt, function(err, hash) {
           newUser.password = hash;
           newUser.save(callback);
       });
   })
}

module.exports.getUserByUsername = function(email, callback) {
   const query = {email};
   User.findOne(query, callback);
}
module.exports.getUserById = function(id, callback) {
   User.findById(id, callback);
}
module.exports.comparePassword = function(candidatePassword, hash, callback) {
   bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
   });
}