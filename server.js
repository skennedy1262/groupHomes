var http = require('http'),
    express = require('express'),
    app = express();
    // bodyParser = require('body-parser');
    // path = require('path');
    // multer = require('multer');
// require and load dotenv
require('dotenv').load();

// var uploading = multer({dest:'/app/images'});

// parse incoming urlencoded form data
// and populate the req.body object
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.bodyParser({uploadDir:'/app/images'}));


// serve static files from public folder
app.use(express.static(__dirname + '/'));

// app.use('/images', express.static(__dirname + '/writable'));

// app.post('/upload', uploading, function (req, res) {
 // console.log(req.files)
 // console.log(res)
// });

/*
 * Catch All Route
 */
app.get(['/'], function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

/*
 * Listen on localhost:9000
 */
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server started on port ', port);
});
