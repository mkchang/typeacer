var express = require('express');
var utils = require('./utils')
var bodyParser = require('body-parser');
var db = require('./db/index').db;
var Result = require('./db/index').Result;

//testing

var app = express();

app.use(bodyParser.json());
app.use(express.static('./public/client'));

app.get('/textPrompt', function(req, res, next) {
  utils.getCleanQuote((data) => {
    res.status(200).send({quote: data.quote, words: data.words})
    next();
  });
});

app.post('/results', function(req, res, next) {
  var quote = req.body.quote;
  var wpm = req.body.wpm;
  Result.find({quote: quote})
  .then((result) => {
    result = result[0];
    console.log('result: ', result);
    if (result) {
      throw result;
    }
    var result = new Result({quote: quote, wpm: wpm})
    result.save((err, result) => {
      if (err) throw err;
      console.log('saved new result: ', result);
      res.sendStatus(201);
    });
  })
  .error((err) => {
    console.error(err);
    res.sendStatus(500);
  })
  .catch((result) => {
    if (wpm > result.wpm) {
      result.update({wpm: wpm}, (err) => {
        if (err) throw err;
        console.log(`updated ${result.quote} to faster wpm: ${wpm}`);
        res.sendStatus(201);
      })
    }
  })
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

