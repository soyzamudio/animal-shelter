'use strict';

var Animal = require('../../models/animal');

module.exports = {
  handler: function(request, reply) {
    var animal = new Animal(request.payload);
    animal.save(function() {
      reply.redirect('/animals');
    });
  }
};
