'use strict';

var http=require('http')

var server=http.createServer( function(request,response) {
	const { method, url } = request
	if (method === "GET" && url === "/health") {
		response.writeHead(200,	{"Content-Type" : "text/plain"});
		response.end("OK");
	} else {
		response.writeHead(400,	{"Content-Type" : "text/plain"});
		response.end('Invalid Request!');
	}
});

server.listen(8080);
