var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


app.get('/', function (req, res) {
	var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
	var lang = req.acceptsLanguages('fr', 'es', 'en-US','pt-BR');
	var os=((req.headers['user-agent']).split(/\s\(|\)\s/)[1]);
 res.json({ ipaddress: ip, language: lang, software: os});
});



app.listen(port, function () {
 console.log("ligado");
});

