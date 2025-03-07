import { poolPromise } from "../config/database";

class AdminRepo{

    async getReport(){
        let pool = await poolPromise;
        let result = await pool.request().query("select l.empID, l.start_date,l.end_date,l.leave_type,l.status,l.reason from employee2030 e join leaves2030 l on e.id = l.empID ")
        return(result)
    }
    

}

module.exports=new AdminRepo();