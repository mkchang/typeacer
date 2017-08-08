var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

// mongoose.connect('mongodb://localhost/typeacer', {
//   useMongoClient: true,
// })

mongoose.connect('mongodb://heroku_vvhgdj3v:sea4ig94ve1dun6t4qjkiqj0vr@ds163721.mlab.com:63721/heroku_vvhgdj3v', {
  useMongoClient: true,
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected');

});

var resultsSchema = new Schema({
  quote: String,
  wpm: Number,
  kpm: Number
});

var Result = mongoose.model('Result', resultsSchema);

module.exports.db = db;
module.exports.Result = Result;
