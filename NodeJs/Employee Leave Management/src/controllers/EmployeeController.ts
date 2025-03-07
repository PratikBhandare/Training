
const empService =  require("../services/EmployeeService")

class EmployeeController{
    async applyLeave(req:any,resp:any){
        console.log(req.body);
        let {id,empid,startDate,endDate,leaveType,status,reason} = req.body;
        console.log(id,empid,startDate,endDate,leaveType,status,reason);
        
        
        // console.log("Hello");
        
        await empService.applyLeave(id,empid,startDate,endDate,leaveType,status,reason);
        resp.send("Done..")

    }

    async getLeaveByID(req:any,resp:any){
        const id = req.params.id;

        console.log(id);

        let data=await empService.getLeaveByID(id);
        console.log("Data:",data);
        
        resp.send(data.recordset )
        

    }

    async getLeaveStatus(req:any,resp:any){
        const id = req.params.id;

        console.log(id);

        let data=await empService.getLeaveStatus(id);
        console.log("Data:",data);
        
        resp.send(data.recordset )

    }


}

export default new EmployeeController();