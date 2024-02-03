// Declaring HTTP and FS
let http = require("http");
let fs = require('fs');

http.createServer(function (req, res) {
     if(req.url == '/page1.html'){
           res.writeHead(200, {'Content-Type': 'text/html'}); 
           fs.readFile("page1.html" , function (err , data){
           res.write(data);    
          res.end('');
          })
     }
          else if (req.url == '/page2.html'){
               res.writeHead(200, {'Content-Type': 'text/html'}); 
           fs.readFile("page2.html" , function (err , data){
           res.write(data);    
          res.end('');
          })
     } 
     else if (req.url == '/page3.html'){
     res.writeHead(200, {'Content-Type': 'text/html'}); 
      fs.readFile("page3.html" , function (err , data){
      res.write(data);    
     res.end('');
     })
     }
     else {
     res.writeHead(404, {'Content-Type': 'text/html'}); 
     fs.readFile("error.html" , function (err , data){
     res.write(data);    
    res.end('');
     })
}
}).listen(8080);
