var express = require('express');
var app = express();
var fs = require('fs');
const publishers = [];

app.get('/', function (req, res) {
    fs.readFile("./JSONfiles/games.JSON", "utf8", (err, data) => {
        res.send(data);
    })
})

app.get('/publisher', function (req, res) {
    fs.readFile("./JSONfiles/games.JSON", "utf8", function (err, data) {
        const gamesArray = JSON.parse(data);
        let i = 0;
        while (i < gamesArray.length) {
            publishers.push(gamesArray[i].publisher);
            i++;
        }
        res.send(JSON.stringify(publishers));
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port)
})