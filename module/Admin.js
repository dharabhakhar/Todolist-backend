const mongoose = require('mongoose');

const admin_login = new mongoose.Schema({
    email:{type:String},
    password:{type:String}
  });

  const admin = mongoose.model('admin_login', admin_login);

  module.exports= admin;