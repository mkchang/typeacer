var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/typeacer', {
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
