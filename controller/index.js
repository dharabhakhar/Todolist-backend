const admin = require('../module/index');

/* admin register */

const register = async (req,res) =>{
    var data = await admin.find({"email":req.body.email});

    if(data.length == 0){
        var data = await admin.create(req.body)

        res.status(200).json({
            status:"success",
            data
        })
    }else{
        res.status(200).json({
            status:"email is used"
        })
    }
}

/* admin login */

const admin_login = async(req,res) =>{
    var data = await admin.find({"email":req.body.email});
    
    if(data.length == 1){
        if(data[0].password == req.body.password){
            res.status(200).json({
                status:"success"
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
    }else if (data.length != 0){
        res.status(200).json({
            status:"find multiple account"
        })
    }
}

/* admin dashboard */

const dashboard = async(req,res) =>{
    var data = await admin.find(req.params).skip(1);

    res.status(200).json({
        data
    })
}

/* add user */

const add_user = async(req,res) =>{
 var data = await admin.create(req.body)

 res.status(200).json({
    status:"success",
    data
 })
}

/* add task */

const add_task = async(req,res) =>{
    var id = req.params.id;
  
      await admin.findByIdAndUpdate(id,req.body);
      var data = await admin.findByIdAndUpdate(id);
  
      res.status(200).json({
          status:"success",
          data
      })
}

module.exports={
    register,
    admin_login,
    add_user,
    add_task,
    dashboard
}