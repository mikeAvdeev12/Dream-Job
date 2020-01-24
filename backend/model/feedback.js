const mongoose = require('mongoose');

const { Schema, model, ObjectId } = mongoose;

const Feedbackschema = new Schema({
  interviewDate: Date,
  createDate: Date,
  questions: String,
  tasks: String,
  contentText: String,
  rating: Number,
  companyId: {
    type: ObjectId,
    ref: 'company'
  },
  userId: {
    type: ObjectId,
    ref: 'user'
  },
});


module.exports = model('feedback', Feedbackschema);
