'use strict';

var active = require('../../views/helpers/active');
var Client = require('../../models/client');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Client.findOne({_id: request.params.clientId}).populate('pets').exec(function(err, client) {
      console.log('**********client***********', client);
      reply.view('templates/clients/show', {path: '/clients', active: active, client: client, _:_});
    });
  }
};
