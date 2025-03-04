const fs = require("fs");

console.log("Start !!");


fs.readFile("hello.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("file Readed succesfully !!");
    Promise.resolve().then(()=>{
        console.log("Promise Resolved !!");
        
    })
    
})

Promise.resolve().then(()=>{
    console.log("Data Query  Completed !!");
    
})


setTimeout(()=>{
    console.log("HTTP Rrequest !!");
},0)

console.log("End !!");

Promise.resolve().then(()=>{
    console.log("Last Promise !!");
    
})

console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
