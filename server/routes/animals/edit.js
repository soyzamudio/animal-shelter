'use strict';

var active = require('../../views/helpers/active');
var Animal = require('../../models/animal');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Animal.findOne({_id: request.params.animalId}, function(err, animal) {
      var species = ['Dog', 'Cat', 'Dragon', 'Kangaroo', 'Koala', 'Snake', 'Rabbit'];
      reply.view('templates/animals/edit', {path: '/animals', active: active, animal: animal, species: species, _:_});
    });
  }
};
