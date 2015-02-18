'use strict';

var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Client.findOne({_id: request.params.clientId}, function(err, client) {
      client.update(request.payload, function(err) {
        if (err) { console.error(err); }
      });
      reply.redirect('/clients/' + request.params.clientId);
    });
  }
};
