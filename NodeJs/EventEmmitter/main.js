const { log } = require("console");
const { EventEmitter } = require("events");

const event = new EventEmitter();

event.on("Greet",()=>{
    console.log("greet Event Emmited");
})

event.emit("Greet")
event.emit("Greet")
event.emit("Greet")
event.emit("Greet")
setTimeout(() => {
    event.emit("Greet")
}, 2000);
event.emit("Greet")



event.once("order",(orderId,amount)=>{
    console.log(`ID: ${orderId} and Amount:${amount}`);
    
})

event.emit("order",1,100)
event.emit("order",2,200)

const express=require("express")
const app=express();

app.listen(3000,()=>{
    console.log("Started!!");
    
})

app.get("/hello",(req,resp)=>{
    console.log("Visited!!");
    
    resp.send("Hello");
    event.emit("greet");
    event.emit("greet");
})

app.get("/hi",(req,resp)=>{
    console.log("Visited!!");
    event.emit("greet");
    resp.end("hi");
    
    // event.emit("greet");
})