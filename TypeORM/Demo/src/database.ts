import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { Student } from "./student";


dotenv.config();

export const AppDataSource=new DataSource({
    type:"mssql",
    database:"JIBE_Main_Training",
    port:Number(process.env.DB_PORT),
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    entities:[Student],
    // logging:true,
    synchronize:true,
    options:{
        trustServerCertificate:true
    }
})
