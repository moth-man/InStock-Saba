const express = require("express");
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require("fs");
const iData = require("../data/inventory.json")

router.use(cors())
router.use(bodyParser.json())

router
  .route("/")
  .get((req, res) => {
    res.json(iData)
  })

module.exports = router