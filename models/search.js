const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const searchSchema = new Schema({
    pet: { type: String, required: true },
    breed: { type: String, required: false },
    location: { type: String, required: true },
    range: { type: Number, required: false },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    size: { type: String, required: true }
});
const Search = mongoose.model("Search, searchSchema");
module.exports = Search;