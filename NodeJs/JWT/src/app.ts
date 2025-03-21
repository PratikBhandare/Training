const express= require("express");
import authcontroller from "./controller/authcontroller";
import authRouter from "./Routes/authroutes";
import { jwtAuth, validateUser } from "./MiddleWare/authmiddleware";
const app=express();


app.use(express.json());


app.use("/auth",authRouter)
app.get("/check",jwtAuth,()=>{
    console.log("Completed...");
    
})

// app.post("/login",validateUser,authcontroller.getData)
// app.post("/login",authcontroller.login)

app.listen(3000,(req:Request,resp:Response)=>{
    console.log("Server is Started...")
})