const express = require('express');
const bodyParser = require("body-parser");
let app = express();

app.set("view-engine","ejs");
app.use(bodyParser.urlencoded());

let msg = "";
let pass = '';

app.get('/', function(req, res) {
    res.render("index.ejs", {msg, pass});
});

app.post('/', function(req, res) {
    pass = req.body.password;
    if (pass.length < 8) {
        msg = "password must be more than 8 characters";
    } else {
        msg = "Registration successfully";
    }
    
    res.render('index.ejs', {msg, pass});
})

app.listen(8080, function() {
    console.log('Server Started');
})