const express = require('express');
const bodyParser = require('body-parser');

const formParser = bodyParser.json();
const app = express();
app.use(formParser) // we can defined it globally or as middleware


let cars =[{id: "1" , model:"BMW" , licenseNumber:"1234" }]
let lastIndex = cars.length;

app.get("/cars/readone" , function (req,res){
  // input
  const cid = req.query.id;

  // process
  const car = cars.find(car=> car.id == cid)
    
    // output 
    const body = {
      data:car
    }
    if(car)
    body.msg = "success"
    else
    body.msg = "failed"

    res.send(body)
})

app.get("/cars/readall" , function(req , res){
  res.send(
    {
      data:cars,
      msg:"success"
    }
  )
})

app.post("/cars/add", function(req,res){
  const car = req.body
  car.id = String(++lastIndex);
  cars.push(car)

  const body = {
    msg: "success"
  }

  res.send(body)

})

app.get("/cars/delete/:id", function(req,res){
  const cid = req.params.id;
  
  const carIndex = cars.findIndex(car=>car.id==cid)
  const body = {};
  if (carIndex >=0){
    cars.splice(carIndex, 1)
    body.msg="deleted successfully"
  }else {
    body.msg="Not found"
  }

  res.send(body)

})

app.post("/cars/edit/:id", function(req,res){
  const cid = req.params.id;
  const car = cars.find(car=>car.id==cid) // object

  const body = {};
  if (car){
    car.licenseNumber = req.body.licenseNumber;
    car.model = req.body.model;
    body.msg="edited successfully"
  }else {
    body.msg="Not found"
  }

  res.send(body)

})

app.get("/" , function(req,res){
  res.sendFile(__dirname + "\\index.html")
})

app.listen(8080 , function(){
    console.log("server started");
})