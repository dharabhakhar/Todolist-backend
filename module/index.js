const mongoose = require('mongoose');

const admin_login = new mongoose.Schema({
    email:{type:String},
    name:{type:String},
    phone_no:{type:String},
    password:{type:String},
  });

  const admin = mongoose.model('admin', admin_login);

  module.exports= admin;