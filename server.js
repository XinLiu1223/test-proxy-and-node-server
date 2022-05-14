var express = require('express');
var request = require('request');
var http = require('http');

var app = express();

app.get('/', function (req, res) {

    res.send('main');
    
});

app.get('/external', function (req, res) {

    request('http://www.google.com/search?q=proxy', function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          res.send(body)
    });

//   var data = JSON.stringify({
//     username: "myname",
//     password: " pass"
//   });

//   var options = {
//     host: 'requestb.in',
//     port: 80,
//     path: '/nfue7rnf',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Length': Buffer.byteLength(data)
//     }
//   };

//   var httpreq = http.request(options, function (response) {
//     response.setEncoding('utf8');
//     response.on('data', function (chunk) {
//       console.log("body: " + chunk);
//     });
//     response.on('end', function() {
//       res.send('ok');
//     })
//   });
//   httpreq.write(data);
//   httpreq.end();

});

app.get('/external-api', function (req, res) {

    request('http://www.google.com/search?q=proxy', function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          res.send(body)
    });

});

app.listen(4000, () => console.log('services run on localhost:4000'));