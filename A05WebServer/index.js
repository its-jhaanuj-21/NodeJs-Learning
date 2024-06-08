const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) =>{
    console.log("New Req Rec.");

    console.log(req.headers);
    // console.log(req)


    // Printing On Web Server
    // res.end("Hello From Server!!");
    
    
    
    // Printing On Web Server from file
    // fs.readFile("./file.txt", "utf-8", (err, data) =>{
    //     res.end(data);
    // })

0
    const log = `${Date.now()} : ${req.url} : New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(req.url){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("I'm Anuj Jha");
                break;
            default:
                res.end("404 Not Found !!");
        }
    });


});

myServer.listen(8000, () => console.log("Server Started !!"));


