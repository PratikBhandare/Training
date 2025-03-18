import express from "express"
import { AppDataSource } from "./config/database";

import "reflect-metadata"
import MovieRouter from "./Routes/Movies.route";

const app = express();


app.listen(4000,()=>{
    console.log("Server is started");
})

app.use(express.json())

app.use("/Movie",MovieRouter);



AppDataSource.initialize().then(async()=>{
    console.log("Connected to sqlserver...");

    

   
    
})
.catch((err)=>{
    console.log(err);
    
});
    
