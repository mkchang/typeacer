var request = require('request');

module.exports.getQuote = (callback) => {
  request('http://quotes.stormconsultancy.co.uk/random.json', (err, res, body) => {
    var data = JSON.parse(body);
    data.words = module.exports.countWords(data.quote);
    callback(data);
  })
    // .on('response', (res, body) => {
      
    //   res.words = module.exports.countWords(res.quote);
    //   callback(res);
    // })
    // .on('error', (err) => {
    //   console.log('getQuote error: ', err);
    // });

  // $.ajax({
  //   url: 'http://quotes.stormconsultancy.co.uk/random.json',
  //   type: 'GET',
  //   success: (data) => {
  //     data.words = module.exports.countWords(data.quote);
  //     callback(data);
  //   },
  //   error: (err) => {
  //     console.log('err', err);
  //   }
  // })
};

module.exports.countWords = (quote) => {
  return quote.split(' ').length;
}