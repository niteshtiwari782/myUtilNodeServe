const mongoose = require("mongoose");

const decorSchema = {
  title: {type: String, required: true},
  price: {type: Number, required: true},
};

const musicSchema = {
  title: {type: String, required: true},
  price: {type: Number, required: true},
};

const PackageSchema = new mongoose.Schema(
  {
    venue_id: {type: String, required: true},
    name: {type: String, required: true},
    capacity: {type: Number, default: 500},
    areaSize: {type: Number, default: 10000},
    startPrice: {type: Number, default: 10000},
    tag: {type: String, required: true},
    img: [{type: String}],
    isOutdoor: {type: Boolean, default: true},
    decor: {type: [decorSchema], default: []},
    music: {type: [musicSchema], default: []},
  },
  {timestamps: true}
);

module.exports = mongoose.model("Packages", PackageSchema);
