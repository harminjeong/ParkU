const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spaceSchema = new Schema({
  location: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Space = mongoose.model("Space", spaceSchema);

module.exports = Space;
 