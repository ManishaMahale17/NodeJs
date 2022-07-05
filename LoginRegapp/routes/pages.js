const express = require('express')

const router = express.Router()
//create routes
router.get('/', (req, res) => {
  res.render('index')
})
router.get('/register', (req, res) => {
  res.render('register')
})
router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/forgotPassword', (req, res) => {
  res.render('forgotPassword')
})

module.exports = router
