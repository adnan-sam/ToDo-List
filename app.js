//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();

const itemsarray = ["Buy Food","Cook Food","Eat Food"];
const workItems=[];

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    const day=date.getDate();
    res.render("list.ejs",{dayname:day, listItems:itemsarray});
})
//For Work portal
app.get("/work", function(req,res){
    res.render("list.ejs",{dayname:"Work List", listItems:workItems});
})
//For about page
app.get("/about", function(req,res){
    res.render("about.ejs");
})

app.post("/", function(req,res){
    const item=req.body.newItem;
    console.log(req.body);
    if(req.body.btnlist=="Work List") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        itemsarray.push(item);
        res.redirect("/");
    }
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})