var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
   console.log("Got a GET request");
   res.sendFile('/Users/alicecorry/Desktop/labs-ac-png/Labs/Lab9a/index.html');
})

app.post('/submit-student-data', function(req, res) {
   var name = req.body.firstName + ' ' + req.body.lastName;
   res.send(name + ' Submitted Successfully!');
   fs.readFile('/JSONfiles/p.json', function (err, data) {
      const peopleArray = JSON.parse(data);
      var p = {
         "fName": req.body.firstName,
         "lName": req.body.lastName,
      }
      peopleArray.push(p);
      res.send(JSON.stringify(peopleArray));
      fs.writeFile("./JSONfiles/p.json", JSON.stringify(peopleArray), err => {
         if (err) console.log("Error writing file:", err)
      })
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port 
   console.log("Example app listening at http://%s:%s", host, port)
})