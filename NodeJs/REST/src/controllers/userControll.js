const User = require("../Models/User");
const UserService=require("../Services/UserService");

class UserController{
    async getAllUser(req,resp){
        try{
            const users= await UserService.getAllUsers();

            console.log(users);
            
            
            
            resp.send(users);
        }catch(err){
            console.log(err);
            
            resp.send("Error");
        }
    }

    async getUserByid(req,resp){
        try{
            console.log("iNSIDE gETUSER");
            
            // console.log(req);
            let id=req.params.id;
            console.log(id);
            
            const data = await UserService.getUserById(id);
            resp.send(data)
        }catch(err){

        }
    }

    async deletUsers(){

        try{
            await UserService.deletUsers();
            resp.send("Deleted Succesfulluy!!")
        }catch(err){
            console.log(err);
            
        }

    }

    async addUser(req,resp){
        try{
            const {id,name,isActive}=req.body;
            console.log(req.body);
            
            await UserService.adduser(id,name,isActive);
        }catch(err){
            console.log(err);
            
        }

    }

    async updateUser(req,resp){
        try{
            console.log("update");
            
            const id=req.params.id
            const {isActive}=req.body;
            await UserService.updateUser(id,isActive)
        }catch(err){
            console.log(err);
            
        }

    }

}

module.exports=new UserController();