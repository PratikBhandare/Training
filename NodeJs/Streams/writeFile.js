const fs = require("fs");

fs.writeFile("write.txt","Hello How Are You ?",(err)=>{
    console.log(err);
    
})

fs.appendFile("write.txt","\nwhat is your name?",(err)=>{
    console.log(err);
    
})