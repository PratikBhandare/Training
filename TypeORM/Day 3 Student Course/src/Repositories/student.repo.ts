import { Student } from "../Entities/student";
// import Student from "../Entities/student";
import { AppDataSource } from "../Configs/db";


 const studentRepo=  AppDataSource.getRepository(Student);
//  const studentQueryBuilder=  studentRepo.createQueryBuilder("student");
 


export{studentRepo}




