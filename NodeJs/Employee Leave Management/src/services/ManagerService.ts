const mRepo = require("../Repository/ManagerRepo")

class ManagerService{

    async getAllPendingLeaves(){
        let data=mRepo.getAllPendingLeaves();
        return data;

    }

    async approveLeave(id:number){
        mRepo.approveLeave(id);
        
    }
    async rejectLeave(id:number){
        mRepo.rejectLeave(id);
        
    }

}

module.exports=new ManagerService();