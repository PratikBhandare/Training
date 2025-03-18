const jwt = require("jsonwebtoken");

const bcrypt=require("bcrypt");


import authservice from "../Services/authservice";

async function validateUser(req:Request,resp:Response,next:Function){
    console.log("Hello From Middleware");
    let user:any=req.body;
    console.log(user);
    
    // return;
    let User:any = await authservice.getUser(user.email);
    // console.log("This is User",User);
    

    if(!User){
        console.log("Not Found");
        return;
    }else{
        if(User.email==user.email && user.password==User.password){
            console.log("Succesfully Logged ...");
            next();
            
        }
        
    }
    
    
}

async function jwtAuth(req:Request,resp:Response,next:Function){
    const authHeaders=req.headers;
    console.log(authHeaders);
    
    
    





}

export {validateUser,jwtAuth}