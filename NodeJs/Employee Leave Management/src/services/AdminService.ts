const aRepo = require("../Repository/AdminRepo")

class AdminService{
    async getReport(){
        let data = await aRepo.getReport();
        return data;

    }

}

module.exports=new AdminService()