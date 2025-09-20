const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Public routes (no auth)

const apiRouter = require("./routes/index");
(async () => {
  try {
    await connectDB();
  } catch (e) {
    console.error("DB connect error:", e.message);
  }
})();

app.use("/", apiRouter);
app.use("/api", require("./routes/item"));

// 404 visibility
app.use((req, res) =>
  res.status(404).json({error: "Not Found", path: req.originalUrl})
);

app.listen(PORT, "127.0.0.1", () =>
  console.log(`Up at http://127.0.0.1:${PORT}`)
);
