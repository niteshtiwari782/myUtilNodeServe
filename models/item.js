const mongoose = require("mongoose");

// Use a loose schema for sample data
const itemSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    qty: {type: Number, default: 0},
    tags: [{type: String}],
  },
  {timestamps: true}
);

module.exports = mongoose.model("Item", itemSchema);
