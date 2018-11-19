const express = require('express')
const app = require('./app/app.js')
const docApp = require('./docs/app.js')

const mainApp = express()


mainApp.use('/app', app)
mainApp.use('/docs', docApp)

mainApp.get('/', function (req, res) {
  res.send("This is the '/' route in main_app");
})

mainApp.listen(3000);

