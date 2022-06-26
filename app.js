//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();

const itemsarray = ["Buy Food","Cook Food","Eat Food"];
const workItems=[];
const studyItems=[];

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//Home page
app.get("/",function(req,res){
    res.render("home.ejs");
})
//For Kitchen List
app.get("/kitchen", function(req,res){
    const day=date.getDate();
    res.render("list.ejs",{dayname:day, listItems:itemsarray});
})
//For Work List
app.get("/work", function(req,res){
    res.render("list.ejs",{dayname:"Work List", listItems:workItems});
})
//For Study List
app.get("/study", function(req,res){
    res.render("list.ejs", {dayname:"Study List", listItems:studyItems});
})
//For about page
app.get("/about", function(req,res){
    res.render("about.ejs");
})
//Adnan written
app.post("/", function(req,res){
    let chc=req.body.choice;
    switch(chc)
    {
        case("kitchen"):
            res.redirect("/kitchen");
        case("study"):
            res.redirect("/study");
        case("work"):
            res.redirect("/work");
        default:
            console.log("Something error in switch statement");
    }    
})
//Earlier code below
app.post("/kitchen", function(req,res){
    const item=req.body.newItem;
    // console.log(req.body);
    if(req.body.btnlist=="Work List") {
        if(item.trim().length != 0)
            workItems.push(item);
        res.redirect("/work");
    }
    else if(req.body.btnlist=="Study List") {
        if(item.trim().length != 0)
            studyItems.push(item);
        res.redirect("/study");
    }
    else {
        if(item.trim().length != 0)
            itemsarray.push(item);
        res.redirect("/kitchen");
    }
})
//For checking back and clear buttons
app.post("/check", function(req,res){
    const val=req.body.tocheck;
    let chckbtn=req.body.btnlist;
    console.log(chckbtn);
    switch(val) {
        case("back"):
            res.redirect("/");
        case("clear"):
        {
            if(chckbtn=="Work List") {
                    workItems.pop();
                res.redirect("/work");
            }
            else if(chckbtn=="Study List") {
                    studyItems.pop();
                res.redirect("/study");
            }
            else {
                    itemsarray.pop();
                res.redirect("/kitchen");
            }
        }
        case("reset"):
        {
            //to empty the list
        }
    }
})
app.listen(3000, function(){
    console.log("Server is running on port 3000");
})