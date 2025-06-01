const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req);
  res.json({ message: 'Welcome to WeddingBells API' });
});

module.exports = router;
