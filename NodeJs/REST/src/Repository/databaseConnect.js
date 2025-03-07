
const {poolPromise} = require("../Config/database")





class UserRepo{
    async getAllUsers(){
        const pool = await poolPromise;
        const result = await pool.request().query("Select * from users1101")
        
        
        return result.recordset
    }

    async getUserById(id){
        const pool = await poolPromise;
        const result = await pool.request().query(`Select * from users1101 where id=${id}`)
        
        
        return result.recordset
    }

    async deletUsers(){
        console.log("In fun");
        
        const pool = await poolPromise;
        await pool.request().query(`Truncate table users1101`)

    }

    async addUser(id,name,isActive){
        const pool = await poolPromise;
        await pool.request().query(`Insert into users1101 values(${id},'${name}',${isActive})`)

    }
    async updateUser(id,isActive){
        const pool = await poolPromise;
        await pool.request().query(`Update  users1101 set isaActive=${isActive} where id=${id}`)
    }
}

module.exports=new UserRepo();