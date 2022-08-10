const express = require('express');
const serverless = require('serverless-http');
const path = require('path')
const ejs = require('ejs');


const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('I am listening');
  res.render('index.ejs');
});

module.exports.handler = serverless(app);

/*

app.listen(3000, () => {
  console.log('App running');
})

*/