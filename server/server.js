const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.argv[2] || process.env || 8080;

app.use(bodyParser.json())

app.use(cors())

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`)
})

//installed : cors, body-parser, express-router, express