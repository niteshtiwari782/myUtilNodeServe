const {Router} = require("express");
const Item = require("../models/item");

const router = Router();

router.post("/createItem", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    throw Error((messsage = err.msg));
  }
});

router.get("/getItem/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).lean();
    if (!item) return res.status(404).json({error: "Not found"});
    res.json(item);
  } catch (e) {
    throw Error((messsage = err.msg));
  }
});

module.exports = router;
