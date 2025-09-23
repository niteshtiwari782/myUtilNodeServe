const {Router} = require("express");
const Packages = require("../models/packages");
const FoodMenu = require("../models/foodMenu");
const Reviews = require("../models/reviews");
const Facilities = require("../models/facilities");
const Rooms = require("../models/rooms");
const Venues = require("../models/venues");
const router = Router();

router.post("/createPackage", async (req, res) => {
  try {
    const item = await Packages.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.post("/createFoodMenu", async (req, res) => {
  try {
    console.log(" creating call ", req.body);
    const item = await FoodMenu.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.post("/createReview", async (req, res) => {
  try {
    const item = await Reviews.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.post("/createFacilities", async (req, res) => {
  try {
    const item = await Facilities.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.post("/createRooms", async (req, res) => {
  try {
    const item = await Rooms.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.get("/getPackages", async (req, res) => {
  try {
    const {venue_id} = req.query;
    const doc = await Packages.find({venue_id: venue_id}).lean();
    if (!doc) return res.status(404).json({error: "Not found"});
    res.json(doc);
  } catch (err) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.get("/getPackageDetail", async (req, res) => {
  try {
    const {package_id} = req.query;
    const doc = await Packages.find({_id: package_id}).lean();
    if (!doc) return res.status(404).json({error: "Not found"});
    res.json(doc);
  } catch (err) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.get("/getReviews", async (req, res) => {
  try {
    const {venue_id} = req.query;
    const doc = await Reviews.find({venue_id: venue_id}).lean();
    if (!doc) return res.status(404).json({error: "Not found"});
    res.json(doc);
  } catch (err) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.get("/getFoodDetails", async (req, res) => {
  try {
    const {venue_id} = req.query;
    const doc = await FoodMenu.find({venue_id: venue_id}).lean();
    if (!doc) return res.status(404).json({error: "Not found"});
    res.json(doc);
  } catch (err) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.get("/getFacilities", async (req, res) => {
  try {
    const {venue_id} = req.query;
    const doc = await Facilities.find({venue_id: venue_id}).lean();
    if (!doc) return res.status(404).json({error: "Not found"});
    res.json(doc);
  } catch (err) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

router.get("/getVenueMetaData", async (req, res) => {
  try {
    const {venue_id} = req.query;
    const doc = await Venues.find({_id: venue_id}).lean();
    if (!doc) return res.status(404).json({error: "Not found"});
    res.json(doc);
  } catch (err) {
    console.log(e);
    throw Error((messsage = e.msg));
  }
});

module.exports = router;
