import express  from "express";
import { dbconnect } from "./config/db";
import registerRouter from "./routes/registerRoutes";
const app=express();
app.use(express.json());



dbconnect();

app.use("/",registerRouter);

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});




