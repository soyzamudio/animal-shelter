'use strict';

var active = require('../../views/helpers/active');
var Animal = require('../../models/animal');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Object.keys(request.query).forEach(function(prop) {
      if (!request.query[prop]) { delete request.query[prop]; }
    });

    if (request.query.min) {
      request.query.age = { $gte: request.query.min };
      delete request.query.min;
    }
    if (request.query.max) {
      request.query.age = request.query.age || {};
      _.merge(request.query.age, { $lte: request.query.max });
      delete request.query.max;
    }
    
    request.query.isAdopted = false;
    console.log('query', request.query);
    Animal.find(request.query, function(err, animals) {
      reply.view('templates/animals/index', {path: '/animals', active: active, animals: animals, _:_});
    });
  }
};
