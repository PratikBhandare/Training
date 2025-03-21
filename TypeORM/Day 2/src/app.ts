import { AppDataSource } from "./Config/db";

import express from "express";

const app = express();

app.listen(4000,()=>{
    console.log("Server is started...");
    
})






AppDataSource.initialize().then(()=>{
    console.log("connected To SQL....");
    
})
.catch((err)=>{
    console.log(err);
    
})