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
  {method: 'post', path: '/animals/{animalId}', config: require('../routes/animals/update')},
  {method: 'post', path: '/animals/{animalId}/adopt', config: require('../routes/animals/adopt')},

  {method: 'get', path: '/clients', config: require('../routes/clients/index')},
  {method: 'get', path: '/clients/new', config: require('../routes/clients/new')},
  {method: 'post', path: '/clients', config: require('../routes/clients/create')},
  {method: 'get', path: '/clients/{clientId}', config: require('../routes/clients/show')},
  {method: 'post', path: '/clients/{clientId}/delete', config: require('../routes/clients/destroy')},
  {method: 'get', path: '/clients/{clientId}/edit', config: require('../routes/clients/edit')},
  {method: 'post', path: '/clients/{clientId}', config: require('../routes/clients/update')}
];
