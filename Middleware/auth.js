var jwt = require('jsonwebtoken');

const checktoken = async(req,res,next)=>{
    jwt.verify(req.headers.authorization,"token",next)
}

module.exports={
    checktoken
}