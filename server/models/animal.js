'use strict';

var mongoose = require('mongoose');

var animalSchema = mongoose.Schema({
  name: String,
  description: String,
  photo: String,
  age: Number,
  gender: String,
  species: String,
  breed: String,
  isAdopted: {type: Boolean, default: false}
});

module.exports = mongoose.model('animal', animalSchema);
