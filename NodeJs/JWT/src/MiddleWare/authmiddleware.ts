// const jwt = require("jsonwebtoken");
import jwt, { TokenExpiredError } from "jsonwebtoken"
import {Request} from "express";

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
    const authHeadersToken=req.headers.authorization;
    console.log(authHeadersToken);

    await jwt.verify(authHeadersToken!,"hello",(err,data)=>{
        console.log(data);
        
    })
    next();
}

export {validateUser,jwtAuth}