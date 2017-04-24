var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

module.exports = {
  create: function(req, res){
    User.findOne({_id: req.body.user_id}, function(err, user){
      if (err){
        res.json({err:err})
      } else{
        var poll = new Poll({
          question: req.body.question,
          option1: req.body.option1,
          option2: req.body.option2,
          option3: req.body.option3,
          option4: req.body.option4,
          _user: user
        })
        poll.save(function(err, poll){
          if (err){
            res.json({err:err})
          } else{
            res.json({poll:poll})
          }
        })
      }
    })
  },
  index: function(req, res){
    Poll.find({}).populate("_user").exec(function(err, polls){
      if (err){
        res.json({err:err})
      } else{
        res.json({polls:polls})
      }
    })
  },
  show: function(req, res){
    Poll.findOne({_id: req.params.id}, function(err, poll){
      if (err){
        res.json({err:err})
      } else{
        res.json({poll:poll})
      }
    })
  },
  delete: function(req, res){
    Poll.remove({_id: req.params.id}, function(err, poll){
      if (err){
        res.json({err:err})
      } else{
        res.json({poll:poll})
      }
    })
  },
  vote: function(req, res){
    Poll.findOne({_id: req.body.poll_id}, function(err, poll){
      if (err){
        res.json({err:err})
      } else{
        if (req.body.option == 1){
          poll.count_option1 += 1;
          poll.save(function(err, poll){
            if (err){
              res.json({err:err})
            } else{
              res.json({poll:poll})
              return;
            }
          })
        }
        if (req.body.option == 2){
          poll.count_option2 += 1;
          poll.save(function(err, poll){
            if (err){
              res.json({err:err})
            } else{
              res.json({poll:poll})
              return;
            }
          })
        }
        if (req.body.option == 3){
          poll.count_option3 += 1;
          poll.save(function(err, poll){
            if (err){
              res.json({err:err})
            } else{
              res.json({poll:poll})
              return;
            }
          })
        }
        if (req.body.option == 4){
          poll.count_option4 += 1;
          poll.save(function(err, poll){
            if (err){
              res.json({err:err})
            } else{
              res.json({poll:poll})
              return;
            }
          })
        }
      }
    })
  }
}
