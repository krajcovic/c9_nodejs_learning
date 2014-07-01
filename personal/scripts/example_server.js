var http = require('http');
 http.createServer(function(req, res) {
 	res.writeHead(200, {'Content-Type': 'text/plain'});
 	res.end('Hello World\n');
 }).listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1", function(){
    //  var addr = server.address();
    //   console.log("Chat server listening at", addr.address + ":" + addr.port);
  console.log('Server running at 127.0.0.1:8080');
});