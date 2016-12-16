var port = process.env.PORT || 3000;
var express = require('express');
var requestCache = require('./request-cache');
var app = express();

app.use(requestCache);

app.get('/', function(request, response) {
	console.log(request.cache);
	response.status(200).send(request.cache);
});

app.listen(port, function() {
	console.log('listening on port ' + port);
});