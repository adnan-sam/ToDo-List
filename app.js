//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();

let itemsarray = ["Buy Food","Cook Food","Eat Food"];
let workItems=[];
let studyItems=[];
const day=date.getDate();

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//Home page
app.get("/",function(req,res){
    res.render("home.ejs");
})
//For Kitchen List
app.get("/kitchen", function(req,res){
    res.render("list.ejs",{identify:"Kitchen List", listItems:itemsarray, daydate:day});
})
//For Work List
app.get("/work", function(req,res){
    res.render("list.ejs",{identify:"Work List", listItems:workItems, daydate:day});
})
//For Study List
app.get("/study", function(req,res){
    res.render("list.ejs", {identify:"Study List", listItems:studyItems, daydate:day});
})

//Adnan written
app.post("/", function(req,res){
    let chc=req.body.choice;
    switch(chc)
    {
        case("kitchen"): {
            res.redirect("/kitchen");
            break;
        }
        case("study"): {
            res.redirect("/study");
            break;
        }
        case("work"): {
            res.redirect("/work");
            break;
        }
        default:
            console.log("Something error in switch statement");
    }    
})
//Adding items to different arrays
app.post("/btnsubmit", function(req,res){
    const item=req.body.newItem;
    // console.log(req.body.btnlist);
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
    else if(req.body.btnlist=="Kitchen List") {
        if(item.trim().length != 0)
            itemsarray.push(item);
        res.redirect("/kitchen");
    }
    else {
        console.log("Error in pushing the elements");
    }
})
//For checking back and clear buttons and popping out the elements
app.post("/back", function(req,res){
    res.redirect("/");
})
app.post("/reset", function(req,res){
    let chckbtn=req.body.tocheck;
    // console.log(chckbtn);
    if(chckbtn=="Work List") {
        workItems=[];
        res.redirect("/work");
    }
    else if(chckbtn=="Study List") {
        studyItems=[];
        res.redirect("/study");
    }
    else if(chckbtn=="Kitchen List") {
        itemsarray = ["Buy Food","Cook Food","Eat Food"];
        res.redirect("/kitchen");
    }
})
app.post("/clear", function(req,res){
    let chckbtn=req.body.tocheck;
    // console.log(chckbtn);
    if(chckbtn=="Work List") {
        workItems.pop();
        res.redirect("/work");
    }
    else if(chckbtn=="Study List") {
        studyItems.pop();
        res.redirect("/study");
    }
    else if(chckbtn=="Kitchen List") {
        itemsarray.pop();
        res.redirect("/kitchen");
    }
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
})
