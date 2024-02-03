const http = require("http");
const fs = require("fs");
const qs = require("querystring");

let handler = function (req, res) {
  fs.readFile("form.html", function (err, data) {
    res.write(data);
    res.end("");
  });

  if (req.method == "POST") {
    res.writeHead(200, { "content-type": "text/html" });
    let bodyReq = "";
    req.on("data", function (data) {
      bodyReq += data;
    });

    req.on("end", function () {
      let parsedQuery = qs.parse(bodyReq);
      console.log(parsedQuery.password.length);
      if (parsedQuery.password.length >= 8) {
        res.write("<h2>Registration success, Welcome</h2>");
      } else {
        res.write("<h2>Registration failed , Sorry</h2>");
      }
      res.end("");
    });
  }
};

const server = http.createServer(handler);
server.listen(8080);
