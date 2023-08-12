const http = require('http')
const server=http.createServer((req, res)=>{
//  res.writeHead(200, {'Content-Type': 'application/json'});
 const route=req.url;
 if(route ==='/'){
    res.end('HOME PAGE')
 }
 else if(route ==='/login'){
    res.end('LOGIN ')
 }
 else if(route ==='/signup'){
    res.end('Signup Page ')
 }
 else{
    res.end("404 page not found")
 }
})
const port=3000;
server.listen(port,() => {
    console.log(`listening on port ${port}`);
});