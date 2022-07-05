/*
//express is advance of node js
Express.js is a web framework for Node.js. It is a fast, robust and asynchronous in nature.
Express is a fast, assertive, essential and moderate web framework of Node.js.
You can assume express as a layer built on the top of the Node.js that helps manage a server and routes
It can be used to design single-page, multi-page and hybrid web applications.
It allows to setup middlewares to respond to HTTP Requests.
It defines a routing table which is used to perform different actions based on HTTP method and URL.
It allows to dynamically render HTML Pages based on passing arguments to templat
//Why use Express
Ultra fast I/O
Asynchronous and single threaded
MVC like structure
Robust API makes routing easy

to reduce your developing time
to create api easyily,routing easy
*/
const express = require('express')
const app = express()
//
app.get('', (req, res) => {
  res.send(`<h2>Hello,this is home Page</h2>
  <a href="/about">Go to about page</a><br>
  <a href="/help">Go to help page</a>
  `)
  //je send karych te ethe yenar
})
app.get('/about', (req, res) => {
  res.send(`
  <h2>Hello,this is About Page</h2>
  <input type="text" placeholder="enter user name here" />
  <button>Click me!</button>
  <a href="/home">Go to home page</a><br>
  <a href="/help">Go to help page</a>
  `)
  //je send karych te ethe yenar
  /*output is:localhost:5000/about
Hello,this is About Page
enter user name here
 Click me!
*/
})
app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Manisha',
      email: 'manu@gmail.com',
      age: 29,
      city: 'Belapur',
    },
    {
      name: 'Vaibhav',
      email: 'v@gmail.com',
      age: 29,
      city: 'Belapur',
    },
    {
      name: 'Manishaaa',
      email: 'mau@gmail.com',
      age: 29,
      city: 'Belapur',
    },
  ])
})
app.listen(5000)
/*output is:localhost:5000/help
[{"name":"Manisha","email":"manu@gmail.com","age":29,"city":"Belapur"},{"name":"Vaibhav","email":"v@gmail.com","age":29,"city":"Belapur"},{"name":"Manishaaa","email":"mau@gmail.com","age":29,"city":"Belapur"}]
*/
