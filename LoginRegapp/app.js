const express = require('express')
const path = require('path')
const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const app = express()

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
})
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))
//parse url encoded bodies(as sent by html forms)
app.use(express.urlencoded({ extended: false }))
//parse url encoded bodies(as sent by API clients)
app.use(express.json())
app.set('view engine', 'hbs')

db.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Connection Successful')
  }
})

//defines routes
app.use('/', require('./routes/pages.js'))
//wenever go to thsi i wnat to require some routes
app.use('/auth', require('./routes/auth.js'))

app.listen(5000, () => {
  console.log('server started on port 5000')
})
