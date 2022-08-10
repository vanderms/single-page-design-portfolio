const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('I am listening');
  res.render('index');
});

module.exports.handler = serverless(app);

/*

app.listen(3000, () => {
  console.log('App running');
})

*/