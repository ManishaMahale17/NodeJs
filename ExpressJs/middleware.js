/*
//Middleware=>Middleware functions are functions that have access to the request object (req), the response object (res)
Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.

...middles used with routes which help to req and response acess and modified
...jithe req and madhe changes karave lagtat tithe middleware use kartat
---routes use kela tr 50 vela vegvegla route sathi code lihava lagel but middle ekdha banval tr te 50 vela use karu skhato
*/

const express = require('express')
const app = express()
//to make middleware
//here is the 3 paramter: next() is used to function joprynt call nahi hot toprynt routes proceed nahi honar
//request la filter karych
const reqFilter = (req, res, next) => {
  //console.log('reqFilter') //reqFilter normal
  // eg:jar age above 18 asel tr wesite acess karen otherwise nahi karnar
  if (!req.query.age) {
    res.send('Plaese provide age')
  } else if (req.query.age < 18) {
    res.send('You can not access this page')
    //http://localhost:8080/contact?age=10=> You cannot access this page
    //http://localhost:8080/contact?age=27=>welcome to contact page
    //http://localhost:8080/=>Plaese provide age
    ////http://localhost:8080/?age=26=>welcome to home page
  } else {
    next()
  }
}
//to use middleware
app.use(reqFilter) //
app.get('/', (req, res) => {
  res.send('welcome to Home page')
})
app.get('/contact', (req, res) => {
  res.send('welcome to Contact page')
})
app.listen(8080)
/*
//Types of middleware
1. application level middleware
2.router level middleware
3.error handling 
4.built in
5. thir party middleware
*/
