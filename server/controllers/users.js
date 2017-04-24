var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  create: function(req, res){
    User.findOne({name: req.body.name}, function(err, user){
      console.log(user)
      if (err){
        res.json({err:err})
      } else if (user){
        res.json({user:user})
      } else{
        var user = new User({name: req.body.name})
        user.save(function(err, user){
          if (err){
            res.json({err:err});
          } else{
            res.json({user:user})
          }
        })
      }
    })
  }
}
