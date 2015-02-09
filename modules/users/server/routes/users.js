var myController = require('../controllers/users');
/**
 * Init the controller
 */
module.exports = function(System) {
  var users = myController(System);

  var routes = [];
  
  routes.push({
    method: 'post',
    path: '/',
    handler: users.create
  });

  routes.push({
    method: 'post',
    path: '/authenticate',
    handler: users.authenticate
  });

  routes.push({
    method: 'get',
    path: '/me',
    handler: users.me,
    authorized: true
  });

  routes.push({
    method: 'get',
    path: '/',
    handler: users.list,
    authorized: true
  });

  routes.push({
    method: 'post',
    path: '/:userId/follow',
    handler: users.follow,
    authorized: true
  });
  
  routes.push({
    method: 'post',
    path: '/:userId/unfollow',
    handler: users.unfollow,
    authorized: true
  });
  
  routes.push({
    method: 'get',
    path: '/:userId',
    handler: users.single,
    authorized: true
  });

  return routes;
};