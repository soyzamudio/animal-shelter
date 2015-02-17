'use strict';

var active = require('../../views/helpers/active');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    reply('Clients!', {path: '/animals', active: active, _:_});
  }
};
