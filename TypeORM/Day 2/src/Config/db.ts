import { DataSource } from "typeorm";
import dotenv from "dotenv"

dotenv.config();

export const  AppDataSource = new DataSource({
    type:"mssql",
    port:Number(process.env.DB_PORT),
    host:process.env.DB_HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    synchronize:true,
    logging:true,
    options:{
        trustServerCertificate:true
    }
})

