const express = require("express")

const cors = require("cors")


const app = express();
app.use(cors());
app.listen(3000,'0.0.0.0',()=>{
    console.log("Server is started !!");
    
})


app.get("/",(req,resp)=>{
    console.log(req.url);
    resp.send("Hello Pratik !!")
    
})

app.get("/home",(req,resp)=>{
    console.log(req.url);
    resp.send("Home !!")
    
})
app.get("/about",(req,resp)=>{
    console.log(req.url);
    resp.send("About !!")
    
})
app.get("/contact",(req,resp)=>{
    console.log(req.url);
    resp.json({msg:"Contact !!"})
    
})