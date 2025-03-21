import studentService from "../Services/student.service";
import { Request } from "express";

class studetController{

    async createStudent(req:any,resp:any){

        const student = req.body;
        await studentService.createStudent(student);
        resp.send("Done...")
        
    }

    async asignCourse(req:Request,resp:any){

        const sid=Number(req.params.sid);
        const cids = req.body.cids;

        await studentService.asignCourse(sid,cids)
        resp.send("Succes..")

    }

}

export = new studetController();