import { Course } from "../Entities/course";
import { courseRepo } from "../Repositories/course.repo";



class courseService{
    async createCourse(course:any){
        await courseRepo.save(course);
    }

}

export=new courseService();