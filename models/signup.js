const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const signupSchema = new Schema({
   firstname: { type: String, required: true},
   lastname: { type: String, required: true},
   email: { type: String, required: true, unique: true},
   password: { type: String, required: true}
});
const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;