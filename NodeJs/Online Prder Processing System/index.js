const express=require("express");
const app = express();

app.listen(3000,(req,resp)=>{
    console.log("Server started !!");
    
})

app.get("/",(req,resp)=>{
    resp.end(
        
    )
})