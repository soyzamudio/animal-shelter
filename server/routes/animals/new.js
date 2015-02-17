'use strict';

var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/animals/new', {path: '/animals', active: active});
  }
};
