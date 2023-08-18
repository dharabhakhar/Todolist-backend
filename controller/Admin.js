const admin = require('../module/Admin');
var jwt = require('jsonwebtoken');

/* admin login */

const admin_login = async(req,res) =>{
    var data = await admin.find({"email":req.body.email});
    var token = jwt.sign({ id: data[0].id }, 'token');
    
    if(data.length == 1){
        if(data[0].password == req.body.password){
            res.status(200).json({
                status:"success",
                token
            })
        }else{
            res.status(200).json({
                status:"incorrect password"
            })
        }
    } else if(data.length == 0){
        res.status(200).json({
            status:"incorrect email"
        })
    }
}

// check email

const check_email = async(req,res)=>{
    var data = await admin.find({"email":req.body.email})
    if(data.length == 1){
        res.status(200).json({
            status:"success",
            data
        })
    } else if(data.length == 0){
        res.status(200).json({
            status:"incorrect email"
        })
    } 
}

// update admin

const update_admin = async(req,res)=>{
    await admin.findByIdAndUpdate({"_id":req.params.id},req.body);
    var data = await admin.findByIdAndUpdate({"_id":req.params.id});

    res.status(200).json({
        status:"success",
        data
    })
}

module.exports={
    admin_login,
    check_email,
    update_admin
}