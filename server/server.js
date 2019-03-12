const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.argv[2] || process.env.PORT || 8080;
const warehouseRoutes = require("./routes/warehouse");
const inventoryRoutes = require("./routes/inventory");

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use("/warehouses", warehouseRoutes);
app.use("/inventory", inventoryRoutes);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
});

//installed : cors, body-parser, express-router, express
