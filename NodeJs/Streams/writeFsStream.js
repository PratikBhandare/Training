const fs =require("fs");

const writeStream = fs.createWriteStream("output.txt","utf-8")

writeStream.write("Hello this is from stream !")
writeStream.end(()=>{
    console.log("End..");
    
})

