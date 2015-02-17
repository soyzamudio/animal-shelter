'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/faq', config: require('../routes/general/faq')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')},

  {method: 'get', path: '/animals', config: require('../routes/animals/index')},
  {method: 'get', path: '/animals/new', config: require('../routes/animals/new')},
  {method: 'post', path: '/animals', config: require('../routes/animals/create')},
  {method: 'get', path: '/animals/{animalId}', config: require('../routes/animals/show')},
  {method: 'post', path: '/animals/{animalId}/delete', config: require('../routes/animals/destroy')},
  {method: 'get', path: '/animals/{animalId}/edit', config: require('../routes/animals/edit')},

  {method: 'get', path: '/clients', config: require('../routes/clients/index')},
];
