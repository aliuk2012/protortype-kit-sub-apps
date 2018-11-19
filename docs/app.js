const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from docs Sub-App!'))

module.exports = app