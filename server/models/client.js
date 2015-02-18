'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  name: {type:String},
  photo: {type:String},
  age: {type:String},
  gender: {type:String},
  location: {type:String},
  createdAt: {type: Date, default: Date.now, required: true},
  pets: [{type: mongoose.Schema.ObjectId, ref: 'Animal'}]
});

module.exports = mongoose.model('client', clientSchema);
