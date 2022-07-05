const mysql = require('mysql')
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysqldata',
})
//check connection db barobar zal ki anhi te
con.connect((err) => {
  if (err) {
    console.log('Error')
  } else {
    console.log('Connection successful')
  }
})
//empinfo table madhla data fetch karyansathi he
con.query('select * from empinfo', (err, result) => {
  console.log('result', result)
})
