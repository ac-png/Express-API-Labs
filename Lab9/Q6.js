var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
   fs.readFile("./JSONfiles/students.JSON", "utf8", function (err, data) {
      const studentArray = JSON.parse(data);
      res.send('The 2nd students last name is' + JSON.stringify(studentArray[1].lname));
   })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port 
   console.log("Example app listening at http://%s:%s", host, port)
})