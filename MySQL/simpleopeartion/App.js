const express = require('express')
const app = express()
const port = 8080
const mysql = require('./connection').con
//configuration
app.set('view engine', 'hbs')
app.set('views', './views')
//to acesss css files
app.use(express.static(__dirname + '/public'))

//Routing
app.get('/', (req, res) => {
  //hbs file convert to html for load to browser use render
  res.render('index')
})
app.get('/add', (req, res) => {
  res.render('add')
})
app.get('/view', (req, res) => {
  res.render('view')
})
app.get('/search', (req, res) => {
  res.render('search')
})
app.get('/update', (req, res) => {
  res.render('update')
})
app.get('/delete', (req, res) => {
  res.render('delete')
})
app.get('/view', (req, res) => {
  let qry = 'select * from student_data'
  mysql.query(qry, (err, results) => {
    if (err) throw err
    else {
      res.render('view', { data: results })
    }
  })
})
app.get('/addstudent', (req, res) => {
  // fetching data from form
  const { name, phone, email, gender } = req.query

  // Sanitization XSS...
  let qry = 'select * from student_data where emailid=? or phoneno=?'
  mysql.query(qry, [email, phone], (err, results) => {
    if (err) throw err
    else {
      if (results.length > 0) {
        res.render('add', { checkmesg: true })
      } else {
        // insert query
        let qry2 = 'insert into student_data values(?,?,?,?)'
        mysql.query(qry2, [name, phone, email, gender], (err, results) => {
          if (results.affectedRows > 0) {
            res.render('add', { mesg: true })
          }
        })
      }
    }
  })
})

app.get('/searchstudent', (req, res) => {
  // fetch data from the form

  const { phone } = req.query

  let qry = 'select * from student_data where phoneno=?'
  mysql.query(qry, [phone], (err, results) => {
    if (err) throw err
    else {
      if (results.length > 0) {
        res.render('search', { mesg1: true, mesg2: false })
      } else {
        res.render('search', { mesg1: false, mesg2: true })
      }
    }
  })
})

app.get('/updatesearch', (req, res) => {
  const { phone } = req.query

  let qry = 'select * from student_data where phoneno=?'
  mysql.query(qry, [phone], (err, results) => {
    if (err) throw err
    else {
      if (results.length > 0) {
        res.render('update', { mesg1: true, mesg2: false, data: results })
      } else {
        res.render('update', { mesg1: false, mesg2: true })
      }
    }
  })
})
app.get('/updatestudent', (req, res) => {
  // fetch data

  const { phone, name, gender } = req.query
  let qry = 'update student_data set username=?, gender=? where phoneno=?'

  mysql.query(qry, [name, gender, phone], (err, results) => {
    if (err) throw err
    else {
      if (results.affectedRows > 0) {
        res.render('update', { umesg: true })
      }
    }
  })
})

//create server
//listen method calls createserver() in  background and it will call
app.listen(port, (err) => {
  if (err) {
    throw err
  } else {
    console.log(`Server is running at port ${port} `)
  }
})
