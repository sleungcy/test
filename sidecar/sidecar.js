'use strict';

var http=require('http')

setInterval(()=>{
  http.get('http://localhost:8080/api/sidecar/data', (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
          data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
          console.log(data);
      });

  }).on("error", (err) => {
      console.log("Error: " + err.message);
  });
}, 1000)

var server=http.createServer( function(request,response) {
	const { method, url } = request
	if (method === "GET"){
		response.writeHead(200,	{"Content-Type" : "text/plain"});
		response.end("OK");
	} else {
		response.writeHead(400,	{"Content-Type" : "text/plain"});
		response.end('Invalid Request!');
	}
});

server.listen(8089);
