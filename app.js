var express = require('express');
var app = express();

app.set('view engine','ejs');
console.log("***Kick-started Lawwakeel services app ***");

app.get('/',function(req,res){
    console.log("on Lawwakeel services page");
    res.send("Welcome to Lawwakeel Services");
});

app.listen(process.env.PORT || 3000);