
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname +  "/index.html");
});

app.post("/", function(req, res){
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var bmi = w/h;
  res.send("Your bmi is : " + bmi);
});

app.listen(3000, function(){
  console.log("server operating on 3000: ");
});
