const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");


const validateToken=asyncHandler(async(requestAnimationFrame,resizeBy,next)=>{
    let token;
    let authHeader=requestAnimationFrame.headers.Authorization || requestAnimationFrame.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                resizeBy.status(401);
                throw new Error("User is not authorized");
            }
            req.user=decoded.user;
            next();
        })

        if(!token){
            resizeBy.status(401);
            throw new Error("user is not authorized or token is missing")
        }
    }
});

module.exports=validateToken;
