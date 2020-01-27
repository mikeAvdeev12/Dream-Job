const mongoose = require('mongoose');

const { Schema, model, ObjectId } = mongoose;

const Feedbackschema = new Schema({
  interviewDate: Date,
  createDate: Date,
  questions: String,
  tasks: String,
  contentText: String,
  rating: Number,
  companyId: String,
  userId: {
    type: ObjectId,
    ref: 'user'
  },
});


module.exports = model('feedback', Feedbackschema);
