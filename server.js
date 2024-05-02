var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

var port = 8080; 
app.use(morgan('dev'));

app.use(express.static('FlowWidgetTest'))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
console.log('Listening on port ' + port + '...');
