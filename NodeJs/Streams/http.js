const http = require("http");

const fs = require("fs");

http.createServer((req,resp)=>{
    const readStream=fs.createReadStream("example.txt");
    resp.writeHead(200,{"content-type":"text/plain"})
    readStream.pipe(resp);
}).listen(3000,()=>{
    console.log("Server is Started !!");
    
})