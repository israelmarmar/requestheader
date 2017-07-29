var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


app.get('/', function (req, res) {
	var lang = request.acceptsLanguages('fr', 'es', 'en-US','pt-BR');
 res.json({ ipaddress: req.connection.remoteAddress, language: null, software: null});
});



app.listen(port, function () {
 console.log(Date.now());
});

