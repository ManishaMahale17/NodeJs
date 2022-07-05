//http module used to handle request and respose in node js
//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the HTTP.
//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
const http = require('http')
//create a server object:
http
  .createServer((req, res) => {
    res.write('<h1>Hello Node Js</h1>') ////write a response to the client
    res.end() ////end the response
  })
  .listen(8080) ////the server object listens on port 8080
