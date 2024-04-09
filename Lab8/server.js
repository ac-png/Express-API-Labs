var express = require('express');
var app = express();
for (let count = 0; count < 10000; count++) {
    // This responds with "Hello World" on the homepage
    app.get('/', function(req, res) {
        console.log(count);
        res.send(count);
    })
}

// This responds with a POST request on the homepage
app.post('/', function(req, res) {
    console.log("Get a POST request for the homepage");
    res.send("Hello POST");
})

// This responds with GET request for the /list_user page
app.post('/list_user', function(req, res) {
    console.log("Got a GET request for the /list_user");
    res.send("Page Listing");
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})