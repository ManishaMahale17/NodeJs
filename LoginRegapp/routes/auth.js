const express = require('express')

const authController = require('../controllers/auth.js')
const router = express.Router()
/*
router.get('/register', (req, res) => {
  res.render('register')
})

*/
//create routes
//we submited router.post
router.post('/register', authController.register)
//crete controller
//router.post('/login', authController.login)
//router.post('/forgotPassword', authController.login)
module.exports = router
