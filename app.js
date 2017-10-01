var express = require("express");
var app     = express();
var path    = require("path");

loadPage('/', 'pages/index.html');

loadPage('/main', 'pages/main.html');

app.use('/', express.static('assets'));

app.listen(3000);

console.log("Running at Port 3000");

function loadPage(directory, fileName) {
    app.get(directory, function(req,res){
        res.sendFile(path.resolve(__dirname, fileName))
    });
}