var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');

module.exports = function(app){
  app.post('/users', users.create)
  app.post('/polls', polls.create)
  app.get('/polls', polls.index)
  app.get('/polls/:id', polls.show)
  app.post('/votes', polls.vote)
  app.delete('/polls/:id', polls.delete)
}
