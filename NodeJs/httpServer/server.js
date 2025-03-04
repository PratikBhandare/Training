const http=require("http");

const server = http.createServer((req,resp)=>{
    if(req.url=="/"){
        resp.end("Hello")
    }
    resp.writeHead(200,{'content-type':'text'})
    
})

server.listen(3000,()=>{
    console.log("Started");
    
})