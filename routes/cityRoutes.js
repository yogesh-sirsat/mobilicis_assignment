const express = require("express");
const router = express.Router();
const { getTopTenCities } = require("../controllers/cityController");

router.route("/topten").get(getTopTenCities);

module.exports = router;
