 const express = require("express");


 const bodyparser = require("body-parser");

 const app = express();
 app.use(bodyparser.urlencoded({extended: true}));

 app.get("/", function(req, res){
	res.sendfile(__dirname+"/index.html");
 });


 app.post("/", function(req, res){
	var height = Number(req.body.num1);
    var weight = Number(req.body.num2);
 var finalBmi = weight/(height/100*height/100);
	res.send("Your BMI is " + finalBmi);
	
 });
 

 app.listen(3000, function(){
 console.log("server has started on port 3000")});


