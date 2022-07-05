const http = require('http')

/*
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' })
    //res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
    res.write(JSON.stringify({name:'manu',email:'manu@gmail.com}))
    res.end()
  })
  .listen(8080)
  */
//we can also write
http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html' })
    res.write('Hiiii')
    res.end()
  })
  .listen(8080)
