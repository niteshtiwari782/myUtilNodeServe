const mongoose = require("mongoose");

const RoomInstance = {
  name: {type: String, required: true},
  price: {type: Number, required: true},
  capacity: {type: Number, required: true},
  img: [{type: String}],
};

const RoomSchema = new mongoose.Schema(
  {
    venue_id: {type: String, required: true},
    rooms: {type: [RoomInstance], default: []},
  },
  {timestamps: true}
);

module.exports = mongoose.model("Rooms", RoomSchema);
