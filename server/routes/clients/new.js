'use strict';

var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/clients/new', {path: '/clients', active: active});
  }
};
