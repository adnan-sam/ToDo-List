//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app=express();

app.set("view-engine", "ejs");

app.get("/", function(req,res){
    var today=new Date();
    var currday=today.getDay();
    var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if(currday==0 || currday==6)
    day=daylist[currday]+" YooHoo!! It's a Holiday";
    else
    day=daylist[currday];

    res.render("list.ejs",{dayname:day});
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})