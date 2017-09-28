var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
    res.sendFile('/home/ec2-user/Projects/FPSite/pages/main.html');
    //__dirname : It will resolve to your project folder.
});

app.get('/bulma.css',function(req,res) {
    res.sendFile('/home/ec2-user/Projects/FPSite/css/bulma.css')
});


app.listen(3000);

console.log("Running at Port 3000");