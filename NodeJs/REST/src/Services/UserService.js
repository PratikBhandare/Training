const User = require("../Models/User");
const UserRepository = require("../Repository/databaseConnect");


class UserService{
    async getAllUsers(){
        const data = await UserRepository.getAllUsers();
        console.log(data);
        
        return data
    }

    async getUserById(id){
        console.log("In getuserbyid");
        
        const data = await UserRepository.getUserById(id);
        console.log(data);
        
        return data
    }

    async deletUsers(){
        await UserRepository.deletUsers();

    }

    async adduser(id,name,isActive){
        await UserRepository.addUser(id,name,isActive);

    }

    async updateUser(id,isActive){
        await UserRepository.updateUser(id,isActive);
         

    }
}

module.exports=new UserService();