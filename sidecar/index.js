'use strict';

var http=require('http')

var max = 100
var min = 0

var server=http.createServer( function(request,response) {
	const { method, url } = request
	if (method === "GET" && url === "/health") {
		response.writeHead(200,	{"Content-Type" : "text/plain"});
		response.end("OK");
	}else if (method === "GET" && url === "/api/sidecar/data") {
		response.writeHead(200,	{"Content-Type" : "text/plain"});
    response.end("Servicing request for sidecar: "+  Math.floor(Math.random() * (max - min + 1)) + min)
	} else {
		response.writeHead(400,	{"Content-Type" : "text/plain"});
		response.end('Invalid Request!');
	}
});

server.listen(8080);
