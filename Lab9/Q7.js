var express = require('express');
var app = express();
var fs = require('fs');
const lastNames = [];

app.get('/', function (req, res) {
   fs.readFile("./JSONfiles/students.JSON", "utf8", function (err, data) {
      const studentArray = JSON.parse(data);
      let i = 0;
      while (i < studentArray.length) {
        lastNames.push(studentArray[i].lname);
        i++;
      }
      res.send(JSON.stringify(lastNames));
   })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port 
   console.log("Example app listening at http://%s:%s", host, port)
})