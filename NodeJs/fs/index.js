
const fs = require("fs")
const m = require("./Modules/Math")


fs.writeFile("hello.txt","Hello pratik ",()=>{
    console.log("Succes!!")
})
// Callback only works with Async Functions

console.log("Addition:",m.add(1,2));
console.log("Multiplication:",m.multiply(1,2));


