import { poolPromise } from "../Config/database";

class AuthClass {

    async getUser(email:string){
        let p = await poolPromise;
        // console.log(email);
        
        try{
            let result = await p.request().query(`select * from Users11010 where email='${email}'`);
        
        return result.recordset[0];
        }catch(err){
            console.log(err);
            return;
            
        }
        
    }


}

export= new AuthClass();