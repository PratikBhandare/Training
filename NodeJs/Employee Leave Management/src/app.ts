const express = require("express");

const app = express();

app.use(express.json())

const EmployeeRoutes = require("./Routes/EmployeeRoutes")
const ManagerRoutes = require("./Routes/ManagerRoutes")
const AdminRoutes = require("./Routes/AdminRoutes")




app.use("/Employee",EmployeeRoutes);
app.use("/Manager",ManagerRoutes);
app.use("/Admin",AdminRoutes);


app.listen(3000,(req:Request,resp:Response)=>{
    console.log("Server is started !!")
})



