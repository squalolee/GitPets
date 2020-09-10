const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SignupSchema = new Schema({
   firstname: { type: String, required: true},
   lastname: { type: String, required: true},
   email: { type: String, required: true, unique: true, validate: { isEmail: true }},
   password: { type: String, required: true}
});
const Signup = mongoose.model(Signup, SignupSchema);
module.exports = Signup;