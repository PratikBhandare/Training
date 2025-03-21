import express from "express";
import { AppDataSource } from "./Configs/db";
import studentRouter from "./Routes/student";
import courseRouter from "./Routes/course";

const app=express();

app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is started...");
    
})


app.use("/student",studentRouter);
app.use("/course",courseRouter)

AppDataSource.initialize()
.then(()=>{
    console.log("Connected to sql server...");
    
})
.catch((err)=>{
    console.log(err);
    
})
