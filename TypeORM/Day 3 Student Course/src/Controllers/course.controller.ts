import courseService from "../Services/course.service";
import { Request,Response } from "express";

class courseController{

    async createCourse(req:any,resp:Response){
        const course=req.body;
        console.log(course);
        

        await courseService.createCourse(course); 
    }
    

}

export = new courseController();