const fs =require("fs");

const readStream = fs.createReadStream("example.txt","utf-8")



readStream.on("data",(chunk)=>{
    console.log(chunk);
    
})

readStream.on("error",(chunk)=>{
    console.log(chunk);
    
})

readStream.on("end",(chunk)=>{
    console.log("End..");
    
})


const writeStream = fs.createWriteStream("out.txt");

readStream.pipe(writeStream);
console.log("Succesfully copied to output")