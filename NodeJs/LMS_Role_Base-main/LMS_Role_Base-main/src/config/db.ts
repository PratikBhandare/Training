import mssql from 'mssql';
import sql from 'mssql'

const config = {
    user:'j2',
    password:'123456',
    server:'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    database:'JIBE_MAIN_TRAINING',
    port:1982,
    options:{
        encrypt: true,
        trustServerCertificate:true
    }
}

const pool = new mssql.ConnectionPool(config);    
const poolConnect = pool.connect();
export { pool, poolConnect };

export default sql;



