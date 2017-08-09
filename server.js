var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log(`listening on ${port}`);
});
