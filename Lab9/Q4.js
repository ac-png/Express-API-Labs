var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
   fs.readFile("./JSONfiles/students.JSON", "utf8", (err, data) => {
      res.send(data);
   })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port 
   console.log("Example app listening at http://%s:%s", host, port)
})