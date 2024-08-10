const express = require("express");
const router = express.Router();
const app = express();
router.get("/api", (req, res) => {
  res.render("api");
});

module.exports = router;
