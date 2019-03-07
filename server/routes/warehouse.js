const express = require("express");
const router = express.Router();
const fs = require("fs");
const randomize = require("randomatic");
const DATA = require("../data/warehouse.json");

router
    .route("/")
    .get((req, res) => {
        res.json(DATA);
    })
    .post((req, res) => {
        const id = randomize("a0", 12);
        const newWarehouse = ({
            warehouseName,
            address,
            contact,
            contactTitle,
            contactNum,
            contactEmail,
            categories
        } = req.body);
        
        newWarehouse.id = id;

        const updatedList = [...DATA, newWarehouse];
        fs.writeFileSync("./data/warehouse.json", JSON.stringify(updatedList));

        res.send(newWarehouse);
    });

module.exports = router;
