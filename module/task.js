const mongoose = require('mongoose');

const task = new mongoose.Schema({
    user_id:{type:String},
    task_name:{type:String},
    status:{ type: String, default: 'pending'}
  });

  const user_task = mongoose.model('task', task);

  module.exports= user_task;