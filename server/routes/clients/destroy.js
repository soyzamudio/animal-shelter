'use strict';

var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Client.remove({_id: request.params.clientId}, function() {
      reply.redirect('/clients');
    });
  }
};
