const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

//Add nunjucks
nunjucks.configure(`${__dirname }/views`, {
  autoescape: true,
  express: app
});

console.log(__dirname + '/views')
app.set('views', './views')

app.get('/', (req, res) => {
  var data = {
    firstName: 'Andy',
    lastName: 'Neale'
  } 
  
  res.render('index.html', data)

})

module.exports = app