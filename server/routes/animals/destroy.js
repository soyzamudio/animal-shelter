'use strict';

var Animal = require('../../models/animal');

module.exports = {
  handler: function(request, reply) {
    Animal.remove({_id: request.params.animalId}, function() {
      reply.redirect('/animals');
    });
  }
};
