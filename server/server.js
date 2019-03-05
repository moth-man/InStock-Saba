const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.argv[2] || process.env || 8080

app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`)
})