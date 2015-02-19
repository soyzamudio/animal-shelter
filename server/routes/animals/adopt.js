'use strict';

var Animal = require('../../models/animal');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Animal.findById(request.params.animalId, function(err, animal) {
      Client.findById(request.payload.clientId, function(err, client) {
        client.pets.push(animal._id);
        animal.isAdopted = true;
        client.save(function() {
          animal.save(function() {
            reply.redirect('/clients/' + client._id);
          });
        });
      });
    });
  }
};
