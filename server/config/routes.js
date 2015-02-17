'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/faq', config: require('../routes/general/faq')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')}
];
