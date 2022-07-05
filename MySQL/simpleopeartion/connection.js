const mysql = require('mysql')
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysqldata',
})
con.connect((err) => {
  if (err) {
    console.log('error!!')
  } else {
    console.log('connection successfil!')
  }
})

module.exports = con
