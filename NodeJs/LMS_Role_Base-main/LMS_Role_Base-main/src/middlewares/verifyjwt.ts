
import { NextFunction ,Request,Response} from 'express';
import jwt from 'jsonwebtoken';

export const verifyjwt = (req:any,res:any,next:NextFunction) => {
   try {
    const token = req.headers['authorization'];
    if(!token){
        return res.status(403).send({auth: false, message: 'No token provided'});
    }
    const decoded = jwt.verify(token,process.env.TOKEN_SECRET as string);
    req.user = decoded;
    if(req.user.role !== 'admin'){
        return res.status(403).send({auth: false, message: 'You are not authorized'});
    }
    next();
   } catch (error) {
     res.status(500).send({auth: false, message: 'Failed to authenticate token'});
   }    
}