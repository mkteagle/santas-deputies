// config/database.js
var mongoose = require('mongoose');
var url = 'mongodb://107.178.211.136:27017/santasdb';
module.exports = {

    'url' : 'mongodb://107.178.211.136:27017/santasdb'

};

var users = mongoose.Schema({
    name: String,
    lastResult: String,
    giftee: String
});
var Person = mongoose.model('Person', users);
