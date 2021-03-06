var express = require('express');
var utils = require('./utils')
var bodyParser = require('body-parser');
var db = require('./db/index').db;
var Result = require('./db/index').Result;

var app = express();

app.use(bodyParser.json());
app.use(express.static('./public/client'));

app.get('/textPrompt', function(req, res, next) {
  utils.getCleanQuote((data) => {
    res.status(200).send({quote: data.quote, words: data.words})
    next();
  });
  // res.status(200).send({quote: 'Perl - The only language that looks the same before and after RSA encryption.', words: 14});
  // next();
});

app.post('/results', function(req, res, next) {
  var quote = req.body.quote;
  var wpm = req.body.wpm;
  var kpm = req.body.kpm;
  Result.find({quote: quote})
  .then((result) => {
    result = result[0];
    console.log('result: ', result);
    if (result) {
      throw result;
    }
    var result = new Result({quote: quote, wpm: wpm, kpm: kpm})
    result.save((err, result) => {
      if (err) throw err;
      console.log('saved new result: ', result);
      res.status(201).send({wpm: wpm, kpm: kpm});
    });
  })
  .error((err) => {
    console.error(err);
    res.sendStatus(500);
  })
  .catch((result) => {
    if (wpm > result.wpm) {
      result.update({wpm: wpm, kpm: kpm}, (err) => {
        if (err) throw err;
        console.log(`updated ${result.quote} to faster wpm: ${wpm}`);
        res.status(201).send({wpm: wpm, kpm: kpm});
      })
    } else {
      res.status(201).send({wpm: result.wpm, kpm: result.kpm});
    }
  })
})

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});

