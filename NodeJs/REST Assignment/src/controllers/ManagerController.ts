const mService = require("../services/ManagerService")

class ManagerController{
    async getAllPendingLeaves(req:any,resp:any){

        let data=await mService.getAllPendingLeaves();
        resp.send(data.recordset)
        
    }

    async approveLeave(req:any,resp:any){
        console.log("Hello");
        
        mService.approveLeave(req.params.id)
        
        resp.send("Done>>");
        
    }

    async rejectLeave(req:any,resp:any){
        mService.rejectLeave(req.params.id);
        resp.send("Rejected..");
    }
}

module.exports=new ManagerController();