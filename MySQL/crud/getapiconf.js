const express = require('express')
const con = require('./config')
const app = express()
app.use(express.json())

//http://localhost/phpmyadmin/index.php?route=/sql&db=mysqldata&table=empinfo
app.get('/', (req, res) => {
  //res.send('Route Done!')
  //to get data
  con.query('select * from empinfo', (err, result) => {
    if (err) {
      res.send('error')
    } else {
      res.send(result)
    }
  })
})
/*
[
    {
        "name": "Manisha Mahale",
        "id": "Mm12",
        "Class": "B-1"
    },
    {
        "name": "Vaibhav Tambe",
        "id": "Mv13",
        "Class": "B-1"
    }
]
*/

//check on postman=> http://localhost:8080/
/*
//to post data=>insert data=>static data insert
app.post('/', (req, res) => {
  const data = { name: 'Vaibhav Tambe ', id: 'Mv13', Class: 'B-1' }

  con.query('INsert INTO empinfo SET ?', data, (error, result, feilds) => {
    if (error) error
    res.send(result)
  })
})
*/
//dynamic data insert
app.post('/', (req, res) => {
  const data = req.body

  con.query('INsert INTO empinfo SET ?', data, (error, result, feilds) => {
    if (error) error
    res.send(result)
  })
})

/* staticaly //put :update
app.put('/', (req, res) => {
  const data = ['Sweety', 'B-2', 'Mv13']
  con.query(
    'UPDATE empinfo SET name=?,Class=? where id=?',
    data,
    (err, result, fields) => {
      if (err) throw error
      res.send(result)
    },
  )
  //output is: sweety-Mv13-B-2
  // no need- res.send('update api sucessfully')
})

*/
//dyanamic data->put :update
app.put('/:id', (req, res) => {
  const data = [req.body.name, req.body.Class, req.params.id]
  con.query(
    'UPDATE empinfo SET name=?,Class=? where id=?',
    data,
    (err, result, feilds) => {
      if (err) throw error
      res.send(result)
    },
  )
})
//{"name":"Sangam Mahale","Class":"Sm12"}data change successfully

//Delete API
app.delete('/:id', (req, res) => {
  con.query(
    'DELETE FROM empinfo WHERE id=' + req.params.id,
    (err, result, feilds) => {
      if (err) throw error
      res.send(result)
    },
  )
  //res.send(req.params.id)
})

app.listen(8080)
