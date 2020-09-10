const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const forumSchema = new Schema({
    title: { type: String, required: true },
    
})