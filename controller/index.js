const admin = require('../module/index');
const user_task = require('../module/task');

/* admin dashboard */

const dashboard = async(req,res) =>{
    var data = await admin.find();

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

/* delete user */

const delete_user = async(req,res)=>{
    await admin.findByIdAndDelete({"_id":req.params.id});

    res.status(200).json({
        status:"success"
    });
}

/* update user */

const update_user = async(req,res)=>{
    var data = await admin.find({"email":req.body.email});
    
    if(data.length == 1){
       await admin.findByIdAndUpdate({"_id":req.params.id},req.body)
       var data = await admin.findByIdAndUpdate({"_id":req.params.id},req.body)
       
       res.json(data);

    } else if(data.length == 0){
        res.status(200).json({
            status:"incorrect email"
        })
    }
}

/* add task */

const add_task = async(req,res) =>{
        var id = req.params.id;
        await user_task.create(req.body);
        var task_data = await user_task.find(req.body);
        var task_id = task_data[0]._id;
        await user_task.findByIdAndUpdate(task_id,{"user_id": id});
        await user_task.findByIdAndUpdate(task_id);
        var data = await user_task.findByIdAndUpdate(task_id);
  
      res.status(200).json({
          status:"success",
          data
      })
}
const all_task = async (req, res) => {

    var userId = req.params.id;

    var data = await user_task.find({ "user_id": userId });

    res.status(200).json({
        status: "suceess",
        data
    })
}

module.exports={
    add_user,
    add_task,
    dashboard,
    all_task,
    delete_user,
    update_user
}