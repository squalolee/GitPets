const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
   uname: { type: String, required: true, unique: true },
   email: { type: String, required: true, unique: true, validate: { isEmail: true }},
   pass: { type: String, required: true}
});
const User = mongoose.model("User, userSchema");
module.exports = User;