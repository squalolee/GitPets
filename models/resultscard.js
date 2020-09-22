const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
const resultscardSchema = new Schema({
    favorite: { type: Boolean },
    searchid: { type: String },
    user: { type: String }
}); 
const ResultsCard = mongoose.model("ResultsCard", resultscardSchema);
module.exports = ResultsCard; 