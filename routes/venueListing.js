const {Router} = require("express");
const Venues = require("../models/venues");

const router = Router();

router.post("/createVenues", async (req, res) => {
  try {
    const item = await Venues.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

module.exports = router;
