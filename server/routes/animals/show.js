'use strict';

var active = require('../../views/helpers/active');
var Animal = require('../../models/animal');
var Client = require('../../models/client');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Animal.findOne({_id: request.params.animalId}, function(err, animal) {
      Client.find(function(err, clients) {
        reply.view('templates/animals/show', {path: '/animals', active: active, animal: animal, clients: clients, _:_});
      });
    });
  }
};
