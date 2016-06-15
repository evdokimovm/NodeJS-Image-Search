var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var search = require('./app/index.js');

var app = express();

var historySchema = new Schema({
	term: String,
	when: Number
}, {
	collection: 'historyCollection'
});

var History = mongoose.model('History', historySchema);
mongoose.connect('mongodb://localhost:27017/imgSearch');

search(app, History, cors);

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('Node.js listening on port ' + port);
});
