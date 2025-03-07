
const fm = require("./Module/fileManagement")
const p=require("process")
// setInterval(() => {
//     console.log("System is running !!...");
    
// }, 5000);


fm.fileWrite("Hello.txt");
fm.fileWrite("Hello.txt","Hello");

fm.fileRead("Hello.txt")

// fm.fileAppend("Hello.txt","\nThis is Appended Content");

// fm.fileDelet("Hello.txt");


// console.log("Node Js Version:",p.version);
// console.log("Platfrom:",p.platform);
// console.log("Process ID:",p.pid);

