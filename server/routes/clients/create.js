'use strict';

var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    var client = new Client(request.payload);
    client.save(function() {
      reply.redirect('/clients');
    });
  }
};
