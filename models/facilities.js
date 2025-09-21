const mongoose = require("mongoose");

const FacilitySchema = new mongoose.Schema(
  {
    venue_id: {type: String, required: true},
    facilities: [{type: String}],
  },
  {timestamps: true}
);

module.exports = mongoose.model("Facilities", FacilitySchema);
