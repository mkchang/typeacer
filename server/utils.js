var request = require('request');
var unidecode = require('unidecode');

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

module.exports.countWords = (quote) => {
  return quote.split(' ').length;
}