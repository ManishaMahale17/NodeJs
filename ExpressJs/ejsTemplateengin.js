//Template Engine: its udes to create dynamic pages need to install like normal npm packages
//dynamic page means data change contineously: static meas const data
//EJS:What is EJS?
//EJS (Embedded JavaScript Templating) is one of the most popular template engines for JavaScript.
// EJS it lets us embed JavaScript code in a template language that is then used to generate HTML

const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname, 'public')
//set template engine using set 1st parameterr view engine-template use and second parameter ejs-> name of package
//to make a folder views its by default name of folder-profile.ejs extension support express js

app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.sendFile(`${publicPath}/index.html`)
})

app.get('/home', (req, res) => {
  res.sendFile(`${publicPath}/home.html`)
})
app.get('/about', (req, res) => {
  res.sendFile(`${publicPath}/about.html`)
})

//using ejs dynamic page creation
app.get('/profile', (req, res) => {
  const user = {
    name: 'manisha',
    age: 29,
    email: 'manu@gmail.com',
    skills: ['Java', 'Python', 'PHP', 'Node'],
  }
  res.render('profile', { user })
})
//localhost:8080/profile
app.get('/login', (req, res) => {
  res.render('login')
}) ////localhost:8080/profile=> This is a Login page

//suppose we want common header,sidebar etc so make folder in views thst is common folder

app.listen(8080)
