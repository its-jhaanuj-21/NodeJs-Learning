const http = require("http");
const fs = require("fs");

const myNewServer = http.createServer((req , res)=>{
    console.log("New Request Recorded"); 

    if(req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()} : ${req.url} : New Request Received\n`;
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(req.url){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("I'm Anuj Kumar Jha!!");
                break;
            default:
                res.end("404 Not Found!");
        }
    })
});

myNewServer.listen(8001, ()=>{
    console.log("Server Started !!!");
})