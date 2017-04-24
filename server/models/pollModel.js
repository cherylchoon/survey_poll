var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  _user: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:true },
  question: {type: String, required: [true, "Question is required"], minlength: [8, "Question must be longer than 7 characters"]},
  option1: {type: String, required: [true, "Please fill in Option 1."], minlength: [3, "Option 1 must be at least 3 characters."]},
  option2: {type: String, required: [true, "Please fill in Option 2."], minlength: [3, "Option 2 must be at least 3 characters."]},
  option3: {type: String, required: [true, "Please fill in Option 3."], minlength: [3, "Option 3 must be at least 3 characters."]},
  option4: {type: String, required: [true, "Please fill in Option 4."], minlength: [3, "Option 4 must be at least 3 characters."]},
  count_option1: {type: Number, default: 0},
  count_option2: {type: Number, default: 0},
  count_option3: {type: Number, default: 0},
  count_option4: {type: Number, default: 0},
  created_at: { type: Date, default: Date.now() }
});
mongoose.model('Poll', PollSchema);
