////in indexhtml.js we show this type of output on browser
//show output on browser: localhost:8080=> welcomepage
//localhost:8080/about.html=>about page
//localhost:8080/home.html=>home page
//but we dont want to show url so wht can we doo
//comapre this and indexhtml.js

const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname, 'public')
//app.use(express.static(publicPath))->code madhech karych he mhanje kunala kalnar nahi
app.get('', (req, res) => {
  res.sendFile(`${publicPath}/index.html`)
})
//localhost:8080=>welcome page
//using sendfile file method we can acess get method
app.get('/home', (req, res) => {
  res.sendFile(`${publicPath}/home.html`)
})
////localhost:8080/home=>home page insted of //localhost:8080/home.html
app.get('/about', (req, res) => {
  res.sendFile(`${publicPath}/about.html`)
})
////localhost:8080/about=>about page
app.get('*', (req, res) => {
  res.sendFile(`${publicPath}/404pnf.html`)
}) //localhost:8080/ab
//😥😥Error: This is not valid page Or Page not found
app.listen(8080)
