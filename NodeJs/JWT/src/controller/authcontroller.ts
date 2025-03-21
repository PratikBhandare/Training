import authservice from "../Services/authservice";
import jwt from "jsonwebtoken"
class AuthController {

    login(req:any,resp:any){
        let user = req.body;
        console.log(user);
        

        // let paylod = {email:user.email,};
        let token = jwt.sign(user,"hello",{expiresIn:"1h"})
        resp.send(token);
    }

    signUp(){

    }


    async getData(req:any,resp:any){
        console.log("Hello");
        let r=await authservice.getUser(req.body.email);
        resp.send(r);
    }

}

export = new AuthController();