import { Student } from "../Entities/student";
import { AppDataSource } from "../Configs/db";
import { DataSource } from "typeorm";

 const studentRepo=  AppDataSource.getRepository(Student);
 const studentQueryBuilder=  AppDataSource.getRepository(Student).createQueryBuilder('student');

export{studentQueryBuilder,studentRepo}




