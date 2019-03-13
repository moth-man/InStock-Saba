const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const randomize = require("randomatic");
const iData = require("../data/inventory.json");

router.use(cors());
router.use(bodyParser.json());

router
    .route("/")
    .get((req, res) => {
        res.json(iData);
    })
    .post((req, res) => {
        const id = randomize("a0", 12);
        const newItem = ({
            name,
            description,
            ordered,
            location,
            quantity_items,
            item_description,
        } = req.body);

        newItem.id = id;
        const updatedList = [...iData, newItem];

        Object.values(newItem).forEach(item => {
            if (
                item.name == "" ||
                item.description == "" ||
                item.ordered == "" ||
                item.location == "" ||
                item.quantity_items == ""
            ) {
                res.status(400).send("Error! Missing fields!");
                return;
            }
        });
        fs.writeFileSync("./data/inventory.json", JSON.stringify(updatedList));
        res.json(updatedList);
    });

module.exports = router;
