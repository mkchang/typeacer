var request = require('request');
var unidecode = require('unidecode');
var swearjar = require('swearjar');

module.exports.getQuote = (callback) => {
  request('http://quotes.stormconsultancy.co.uk/random.json', (err, res, body) => {
    if (err) {
      throw err;
    }
    var data = JSON.parse(body);
    data.quote = unidecode(data.quote);
    data.words = module.exports.countWords(data.quote);
    callback(data);
  })
};

module.exports.getCleanQuote = (callback) => {
  var cleanLoop = () => {
    module.exports.getQuote((data) => {
      if (swearjar.profane(data.quote)) {
        cleanLoop();
      } else {
        callback(data);
        return;
      }
    })
  };

  cleanLoop();
}

module.exports.countWords = (quote) => {
  return quote.split(' ').length;
}