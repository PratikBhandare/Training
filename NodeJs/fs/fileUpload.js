const express = require('express');
const multer = require("multer");
const path = require("path");


const app = express();



const storage = multer.diskStorage({
    destination:"./FilesUpload",
    filename:(req,file,cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload=multer({storage:storage})



app.post("/upload", upload.single("file"),(req,resp)=>{
    if(!req.file){
        return resp.status(400).send("No file uploaded !!")
    }else{
        resp.send("Done !!")
    }
})


app.listen(3000,(req,resp)=>{
    console.log("server is started !!");
    
})