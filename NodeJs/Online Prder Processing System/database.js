const sql = require("mssql")


const config={
    user:"j2",
    password:"123456",
    server:"dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port:1982,
    database:"JIBE_Main_Training",
    options:{
        encrypt:false,
        trustServerCertificate:true
    }
}
const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool=>{
    console.log("Connected to sql server");
    return pool;
})
.catch(err=>{
    console.log(err);
    
})

module.exports={sql,poolPromise}