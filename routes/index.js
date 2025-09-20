const {Router} = require("express");

const router = Router();

// Health for API namespace
router.get("/ping", (req, res) => {
  res.json({ok: true, time: new Date().toISOString()});
});

module.exports = router;
