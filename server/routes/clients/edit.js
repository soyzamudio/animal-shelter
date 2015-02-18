'use strict';

var active = require('../../views/helpers/active');
var Client = require('../../models/client');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Client.findOne({_id: request.params.clientId}, function(err, client) {
      reply.view('templates/clients/edit', {path: '/clients', active: active, client: client, _:_});
    });
  }
};
