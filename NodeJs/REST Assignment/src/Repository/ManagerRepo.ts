import { poolPromise } from "../config/database";

class ManagerRepo{
    async getAllPendingLeaves(){
        let pool = await poolPromise;
        let result = pool.request().query("select * from leaves2030 where status='pending'");
        return result;
    }

    async approveLeave(id:number){
        let pool = await poolPromise;
        await pool.request().query(`update leaves2030 set status = 'approved' where id=${id} and status='pending'`);

    }

    async rejectLeave(id:number){

        let pool = await poolPromise;
        await pool.request().query(`update leaves2030 set status = 'Rejected' where id=${id} `);


    }
}

module.exports=new ManagerRepo();