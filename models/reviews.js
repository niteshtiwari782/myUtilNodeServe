const mongoose = require("mongoose");

const reviewsSchema = {
  author: {type: String, required: true},
  comment: {type: String, required: true},
  date: {type: String, required: true},
};

const ReviewSchema = new mongoose.Schema(
  {
    venue_id: {type: String, required: true},
    reviews: {type: [reviewsSchema], default: []},
  },
  {timestamps: true}
);

module.exports = mongoose.model("Reviews", ReviewSchema);
