'use strict';

var Animal = require('../../models/animal');

module.exports = {
  handler: function(request, reply) {
    Animal.findOne({_id: request.params.animalId}, function(err, animal) {
      animal.update(request.payload, function(err) {
        if (err) { console.error(err); }
      });
      reply.redirect('/animals/' + request.params.animalId);
    });
  }
};
