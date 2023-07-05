const user = require('../module/index');

/* user login */

const user_login = async(req,res) =>{
    var data = await user.find({"email":req.body.email});
    
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

/* user dashboard */

const dashboard = async(req,res) =>{
    var data = await user.find({"name":req.params.name});

    res.status(200).json({
        data
    })
}

/* users completed task */

const user_task_complete = async(req,res) =>{
    var id = req.params.id;
    await user.findByIdAndUpdate(id,{"status":"complete"})
    var data = await user.findByIdAndUpdate(id)

    res.status(200).json({
        status:"success",
        data
    })
}

/* users delete task */

const user_task_delete = async(req,res) =>{
    var id = req.params.id;
    await user.findByIdAndUpdate(id,{"status":"delete"})
    var data = await user.findByIdAndUpdate(id)

    res.status(200).json({
        status:"success",
        data
    })
}

module.exports={
    user_login,
    dashboard,
    user_task_complete,
    user_task_delete
}