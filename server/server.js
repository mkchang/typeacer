var express = require('express');
var utils = require('./utils')
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('./public/client'));

app.get('/textPrompt', function(req, res, next) {
  utils.getQuote((data) => {
    res.status(200).send({quote: data.quote, words: data.words})
    next();
  });
});

app.post('/results', function(req, res, next) {
  console.log(req.body);
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

