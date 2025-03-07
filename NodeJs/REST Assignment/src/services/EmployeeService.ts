const empRepo = require("../Repository/EmployeeRepo")


class EmployeeService{
    async applyLeave(id:number,empid:number,startDate:Date,endDate:Date,leaveType:string,status:string,reason:string){
        console.log("leave...");
        console.log(id,empid,startDate,endDate,leaveType,status,reason);
        
        empRepo.applyLeave(id,empid,startDate,endDate,leaveType,status,reason);
        
    }

    async getLeaveByID(id:number){
        let data= await empRepo.getLeaveByID(id);
        return data;
    }

    async getLeaveStatus(id:number){
        let data =empRepo.getLeaveByID(id);
        return data;
    }
}



module.exports=new EmployeeService();