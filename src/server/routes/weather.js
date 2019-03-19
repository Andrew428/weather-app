const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weather");

router.get('/fetchWeather/:city',  weatherController.getWeather);

router.get('/fetchForecast/:city',  weatherController.getForecast);

module.exports = router;




