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

router.get("/getVenueList", async (req, res, next) => {
  try {
    const limit = Math.min(
      Math.max(parseInt(req.query.limit, 10) || 20, 1),
      100
    );
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Venues.find({})
        .sort({_id: 1}) // stable order for paging
        .skip(skip)
        .limit(limit)
        .lean(),
      Venues.countDocuments({}),
    ]);

    res.json({total, page, limit, items});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
