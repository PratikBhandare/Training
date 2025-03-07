const aService = require("../services/AdminService")

class AdminController{

    async getReport(req:any,resp:any){
        let data = await aService.getReport();
        resp.send(data.recordset)
    }

}

module.exports=new AdminController();