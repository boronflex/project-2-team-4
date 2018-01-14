const express = require("express");
const router = express.Router();
const bus = require("../models/busModel.js");
const rider = require("../models/rider.js");


router.get("/", function(req, res) {
  console.log("route is getting hit");
  bus.all(function(data) {
    var hbsObject = {
      bus: data
    };
    res.render("index", hbsObject);

  });
});

module.exports = router;