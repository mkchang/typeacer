var express = require('express');
var utils = require('./utils')

var app = express();

app.use(express.static('./public/client'));

app.get('/textPrompt', function(req, res, next) {
  utils.getQuote((data) => {
    console.log(data);
    res.status(200).send({text: data.quote, words: data.words})
    next();
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

