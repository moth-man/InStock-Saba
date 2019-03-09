const express = require("express");
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require("fs");
const iData = require("../data/inventory.json");
const randomize = require("randomatic");


router.use(cors())
router.use(bodyParser.json())

router
  .route("/")
  .get((req, res) => {
    res.json(iData)
  })
  .post((req, res) => {
    const id = randomize('a0', 12);
    const newInventory = ({
      name, 
      description,
      ordered,
      location,
      quantity,
      status,
    } = req.body);

    newInventory.id = id;
    const updatedInventory = [...iData, newInventory];

    fs.writeFileSync("./data/inventory.json", JSON.stringify(updatedInventory));
        res.json(iData);
  })

module.exports = router