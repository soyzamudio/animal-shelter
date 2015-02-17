'use strict';

var active = require('../../views/helpers/active');
var Animal = require('../../models/animal');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Animal.findOne({_id: request.params.animalId}, function(err, animal) {
      reply.view('templates/animals/edit', {path: '/animals', active: active, animal: animal, _:_});
    });
  }
};
