var express = require('express');
var app = express();

app.set('view engine','ejs');
console.log("***Kick-started Lawwakeel services app ***");

app.get('/',function(req,res){
    console.log("on Lawwakeel services page");
    res.send("Welcome to Lawwakeel Services");
});

app.listen(3000,function(){
    console.log("-->Running on your Localhost on port 3000");
})