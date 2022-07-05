const http = require('http')
//process.env.PORT=> to set port enviroment to run code
const port = process.env.PORT || 8080
//createserver it is function with two parameters request and response
const server = http.createServer((req, res) => {
  res.statusCode = 200
  //contet header =>request send to html header format
  //client la sangnyasathi asa response pathaval
  res.setHeader('Content-Type', 'text/html')
  res.end(`<h1>HI this is example of Http Server!!!!!</h1>`)
})
server.listen(port, () => {
  console.log(`Server is listning on port ${port}`) //Server is listning on port 8080
})
