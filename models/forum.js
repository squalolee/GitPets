const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const forumSchema = new Schema({
    name: { type: String, required: true},
    posttitle: { type: String, required: false},
    postbody: { type: String, required: true}, 
    upvote: { type: Number }, 
    downvote: { type: Number }
});
const Forum = mongoose.model("Forum", forumSchema);
module.exports = Forum; 


