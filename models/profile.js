const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const profileSchema = new Schema({
   firstname: { type: String, required: true},
   lastname: { type: String, required: true},
   email: { type: String, required: true, unique: true},
   password: { type: String, required: true},
   useravatar: {type: String, required: false}
});
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;