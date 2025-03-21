import { DataSource } from "typeorm";
import "reflect-metadata";
import { Student } from "../Entities/student";
import { Course } from "../Entities/course";


 
export const AppDataSource = new DataSource({
    type:'mssql',
    host:'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port:1982,
    username:'j2',
    password:'123456',
    database:'JIBE_Main_Training',
    synchronize:true,
    logging:true,
    entities: [Course,Student],
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
})
 
 
