
// const http = require("http");

const express = require("express");

const app = express()  //  app -> handler function 

app.get('/', (req, res)=>{
    return res.send("Hello From Home Page in Express!!");
})

app.get("/about", (req, res)=>{
    return res.send("Hello From About Page in Express!!"+ ' hey '+ req.query.name);
})

app.listen(8001, ()=> console.log("Server Started !!"))




// const myNewServer = http.createServer(app);
// myNewServer.listen(8001, ()=> console.log("Server Started !!!"));