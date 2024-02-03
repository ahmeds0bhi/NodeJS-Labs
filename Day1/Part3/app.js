const express = require("express");
const server = express();

server.get("/index.html",function(req,res){
    res.send("<h1>welcome From The home page</h1>")
})

server.listen(8080,function(){
    console.log("server started");
})