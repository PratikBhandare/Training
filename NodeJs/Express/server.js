
const express = require("express");

const app=express();


app.get("/",(req,resp)=>{
    console.log("Default Path ");
    resp.send("Hello Pratik !!")
})

app.get("/node",(req,resp)=>{
    console.log(`${req.url} Path `);
    resp.send("Hello Node !!")
})
app.get("/ASP",(req,resp)=>{
    console.log(`${req.url} Path `);
    resp.send("Hello ASP !!")
})
app.get("/Angular",(req,resp)=>{
    console.log(`${req.url} Path `);
    resp.send("Hello Angular !!")
})

app.listen(3000,()=>{
    console.log("Server is Started !!");
    
})