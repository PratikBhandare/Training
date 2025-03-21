import { AppDataSource } from "../Configs/db";
import { courseRepo } from "../Repositories/course.repo";
import  {studentRepo}  from "../Repositories/student.repo";
import {studentQueryBuilder} from "../Repositories/student.repo"



class studentService{
    async createStudent(student:any){
        if(student!.courses==undefined){
            student!.courses=[];
        }
        await studentRepo.save(student)

    }

    async asignCourse(sid:any,cids:any[]){
        console.log(cids);
        
        let student = await studentRepo.findOne({
            relations:{
                courses:true
            },
            where:{id:sid}
        });

        // console.log(student!.courses);
        
        
        
        
        for(let i=0;i<cids.length;i++){
            let course = await courseRepo.findOneBy({id:cids[i]});
            student!.courses.push(course!)
           
            
            // console.log("Hello");
            
        }

        await studentRepo.save(student!)
        
        console.log(student!.courses);
        
        

    }

    async getStudents(){
        studentQueryBuilder.select()
    }
}

export = new studentService();
