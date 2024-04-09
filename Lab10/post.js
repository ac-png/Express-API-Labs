var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
   console.log("Got a GET request");
   res.sendFile('/Users/alicecorry/Desktop/Lab10');
})

app.post('/submit-games-data', function(req, res) {
   var game = req.body.title + ' ' + req.body.release_year + ' ' + req.body.publisher + ' ' + req.body.genre + ' ' + req.body.copies_sold;
   res.send(game + ' Submitted Successfully!');
   fs.readFile('/JSONfiles/games.json', function (err, data) {
      const gamesArray = JSON.parse(data);
      var games = {
         "title": req.body.title,
         "release_year": req.body.release_year,
         "publisher": req.body.publisher,
         "genre": req.body.genre,
         "copies_sold": req.body.copies_sold
      }
      gamesArray.push(games);
      res.send(JSON.stringify(gamesArray));
      fs.writeFile("./JSONfiles/games.json", JSON.stringify(gamesArray), err => {
         if (err) console.log("Error writing file:", err)
      })
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port 
   console.log("Example app listening at http://%s:%s", host, port)
})