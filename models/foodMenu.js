const mongoose = require("mongoose");

const FoodOption = {
  name: {type: String, required: true},
  price: {type: Number, required: true},
  options: [{type: String}],
};

const FoodMenuSchema = new mongoose.Schema(
  {
    venue_id: {type: String, required: true},
    menuImg: [{type: String}],
    rating: {type: Number, default: 4},
    foodOption: {type: [FoodOption], default: []},
  },
  {timestamps: true}
);

module.exports = mongoose.model("FoodMenu", FoodMenuSchema);
