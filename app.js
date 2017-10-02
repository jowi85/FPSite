var express = require("express");
var app     = express();
var path    = require("path");

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
});

app.post('/main', function(req,res){
    res.sendFile(path.resolve(__dirname, 'pages/main.html'))
});

app.use('/', express.static('assets'));

app.listen(3000);

console.log("Running at Port 3000");
