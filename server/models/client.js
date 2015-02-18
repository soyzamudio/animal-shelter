'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  name: String,
  photo: String,
  age: Number,
  gender: String,
  location: String
});

module.exports = mongoose.model('client', clientSchema);
