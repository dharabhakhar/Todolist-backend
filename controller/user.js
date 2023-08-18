const user = require('../module/index');
var jwt = require('jsonwebtoken');
const user_task = require('../module/task');

/* user login */

const user_login = async(req,res) =>{
    try {
        var data = await user.find({"email":req.body.email});
        var token = jwt.sign({ id: data[0].id }, 'token');
        
        if(data.length == 1){
            if(data[0].password == req.body.password){
                res.status(200).json({
                    status:"success",
                    data,
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
        }else if (data.length != 0){
            res.status(200).json({
                status:"find multiple account"
            })
        }
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

// check user

const check_email = async(req,res)=>{
    var data = await user.find({"email":req.body.email})
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

// update user

const update_user = async(req,res)=>{
    await user.findByIdAndUpdate({"_id":req.params.id},req.body);
    var data = await user.findByIdAndUpdate({"_id":req.params.id});

    res.status(200).json({
        status:"success",
        data
    })
}

/* user dashboard */

const dashboard = async(req,res) =>{
    var data = await user.find({"_id":req.params.id});

    res.status(200).json({
        data
    })
}

/* user all task */

const all_task = async(req,res)=>{
    var data = await user_task.find({ "user_id": req.params.id, "status":"pending" });

    res.status(200).json({
        status: "suceess",
        data
    })
}

/* users completed task */

const user_task_complete = async(req,res) =>{
    var id = req.params.id;
    await user_task.findByIdAndUpdate(id,{"status":"complete"})
    await user_task.findByIdAndUpdate(id)
    var data = await user_task.findByIdAndUpdate(id)

    res.status(200).json({
        status:"success",
        data
    })
}

/* users delete task */

const user_task_delete = async(req,res) =>{
    var id = req.params.id;
    await user_task.findByIdAndUpdate(id,{"status":"delete"})
    var data = await user_task.findByIdAndUpdate(id)

    res.status(200).json({
        status:"success",
        data
    })
}

module.exports={
    user_login,
    dashboard,
    user_task_complete,
    user_task_delete,
    check_email,
    update_user,
    all_task
}