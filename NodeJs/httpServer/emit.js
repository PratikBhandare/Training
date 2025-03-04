const http = require("http");
const EventEmitter = require("events");
const { serialize } = require("v8");

const Server = new EventEmitter();


Server.on("request",(req,resp)=>{
    resp.end("Hello From Event Driven Server !!")
})


http.createServer((request,response)=>{
    Server.emit("request",request,response)
    
}).listen(3000,()=>{
    console.log("Started !!");
    
})



