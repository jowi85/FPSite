var express = require("express");
var app     = express();
var path    = require("path");

var directory;

if (process.env.ENVIRONMENT === 'dev') {
    directory = '/home/ec2-user'
} else {
    directory = '/users/josephmiller'
}

app.get('/',function(req,res){
    res.sendFile(directory + '/Projects/FPSite/pages/login.html');
    //__dirname : It will resolve to your project folder.
});

app.get('/main',function(req,res){
    res.sendFile(directory + '/Projects/FPSite/pages/main.html')
});

app.get('/bulma.css',function(req,res) {
    res.sendFile(directory + '/Projects/FPSite/css/bulma.css')
});

app.get('/images/fpShort',function(req,res){
    res.sendFile(directory + '/Projects/FPSite/images/fpShort.png');
});

app.get('/images/fpLong',function(req,res){
    res.sendFile(directory + '/Projects/FPSite/images/fpLong.png');
});

app.get('/images/fb',function(req,res){
    res.sendFile(directory + '/Projects/FPSite/images/fb.png');
});

app.get('/images/discord',function(req,res){
    res.sendFile(directory + '/Projects/FPSite/images/discord.svg');
});

app.listen(3000);

console.log("Running at Port 3000");