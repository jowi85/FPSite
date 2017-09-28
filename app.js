var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/main.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(80);

console.log("Running at Port 80");