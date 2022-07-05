const express = require('express')

const path = require('path')
//path module used to acess your project folder->konte pan path acess karu shakto
const app = express()
//The const app = express() =>statement creates a new express application for you. The createApplication function from the lib/express. js file is the default export, which we see as the express() function call.
const publicPath = path.join(__dirname, 'public')
//we got a path that locates public folder
//console.log(publicPath) //D:\PERN\NodeJs\ExpressJs\public
//use:It is a function of express js
// staticis function  the content which is loaded in filehere about.html
//static function static pages la load karnar
app.use(express.static(publicPath))
app.listen(8080)
// to run this: PS D:\PERN\NodeJs\ExpressJs> nodemon ./indexhtml.js
//show output on browser: localhost:8080=> welcomepage
//localhost:8080/about.html=>about page
//localhost:8080/home.html=>home page
