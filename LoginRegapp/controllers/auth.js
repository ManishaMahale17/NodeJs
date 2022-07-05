const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
})

//Register User
exports.register = (req, res) => {
  console.log(req.body) //grabbing all data
  /*
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;
  */

  //destructing of above is follwing
  const { name, email, password, passwordConfirm } = req.body
  db.query(
    'SELECT email FROM users WHERE email = ?',
    [email],
    async (error, results) => {
      if (error) {
        console.log(error)
      }
      if (results.length > 0) {
        return res.render('register', {
          message: 'That email is already in use',
        })
      } else if (password != passwordConfirm) {
        return res.render('register', {
          message: 'Password not match',
        })
      }
      let hashedPassword = await bcrypt.hash(password, 8)
      console.log(hashedPassword)
      // res.send('testing')
      //sql query insert someting in db
      db.query(
        'INSERT INTO users SET ? ',
        { name: name, email: email, password: hashedPassword },
        (error, result) => {
          if (error) {
            console.log(error)
          } else {
            console.log(results)
            return res.render('register', {
              message: 'User registerd',
            })
          }
        },
      )
    },
  )
}
