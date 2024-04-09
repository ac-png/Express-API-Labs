var express = require('express');
var app = express();
var fs = require('fs');
var student = {
   "id": 4567,
   "fname":"Paula",
   "lname":"Doyle",
   "course": "Engineering",
   "year": "5th"
}

app.post('/', function (req, res) {
   fs.readFile("./JSONfiles/students.JSON", "utf8", function (err, data) {
      const studentArray = JSON.parse(data);
      console.log(data);
      studentArray.push(student);
      fs.writeFile('./JSONfiles/students.JSON', JSON.stringify(studentArray), err => {
         if (err) console.log("Error writing file:", err);
      })
      res.send(JSON.stringify(studentArray));
   })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port 
   console.log("Example app listening at http://%s:%s", host, port)
})