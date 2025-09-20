const mongoose = require("mongoose");

// Use a loose schema for sample data
const VenueSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    city: {type: String, required: true},
    location: {type: String, required: true},
    img: {type: String, required: true},
    rating: {type: Number, default: 4},
    isOnlyVeg: {type: Boolean, default: true},
    reviewsCount: {type: Number, default: 4},
    badgeValue: {type: String, required: true},
    startPrice: {type: Number, default: 10000},
    capacity: {type: Number, default: 10000},
    speciality: [{type: String}],
  },
  {timestamps: true}
);

module.exports = mongoose.model("Venues", VenueSchema);
