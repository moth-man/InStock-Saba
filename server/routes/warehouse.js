const express = require("express");
const router = express.Router();
const fs = require("fs");
const DATA = require("../data/warehouse.json");

router
    .route("/")
    .get((req, res) => {
        res.json(DATA);
    })
    .post((req, res) => {
        const {
            warehouseName,
            address,
            contact,
            contactTitle,
            contactNum,
            contactEmail,
            categories
        } = req.body;

        const newWarehouse = {
            warehouseName,
            address,
            contact,
            contactTitle,
            contactNum,
            contactEmail,
            categories
        };
        res.send(newWarehouse);
    });

module.exports = router;
