const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from Prototype Kit Sub-App!'))

module.exports = app