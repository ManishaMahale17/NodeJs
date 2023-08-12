const http= require('http')
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application\json'});
    res.writeHead(JSON.stringify({name:'Manu',email:'manu@gmail.com'}));

}).listen(5000);