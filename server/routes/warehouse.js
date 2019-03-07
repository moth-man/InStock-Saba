const express = require("express");
const router = express.Router();
const DATA = require("../data/warehouse.json");

router.route("/").get((req, res) => {
    res.json(DATA);
});

module.exports = router;
