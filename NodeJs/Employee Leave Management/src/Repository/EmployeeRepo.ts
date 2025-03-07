
import {poolPromise} from "../config/database"

class EmployeeRepo{


    async applyLeave(id:number,empid:number,startDate:Date,endDate:Date,leaveType:string,status:string,reason:string){

        let pool = await poolPromise;
        // console.log(pool)

        console.log("In repo");
        
        // console.log(typeof id, typeof empid, typeof startDate,typeof endDate,typeof leaveType,typeof status,typeof reason);
        
       await pool.request().query(`insert into leaves2030 values (${empid},'${startDate}','${endDate}','${leaveType}','${status}','${reason}')`);

    //    return; 
    }

   async getLeaveByID(id:number){
    let pool = await poolPromise;
    let result = await pool.request().query(`select * from leaves2030  where empID=${id}`);
    console.log(result);
    
    return result;

    }

    async getLeaveStatus(){
        
    }
}

module.exports=new EmployeeRepo();