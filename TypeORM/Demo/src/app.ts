import express from "express"
import { AppDataSource } from "./database";
import { Student } from "./student";
import "reflect-metadata"

const app = express();


app.listen(process.env.PORT,()=>{
    console.log("Server is started");
    
})

const studentRepository= AppDataSource.getTreeRepository(Student)

AppDataSource.initialize().then(async()=>{
    console.log("Connected to sqlserver...");

    const student=studentRepository.create({
        id:1,
        name:"Pratik",
        email:"pratik@gmail.com"
    })
    studentRepository.save(student);

   
    
})
.catch((err)=>{
    console.log(err);
    
});
    
