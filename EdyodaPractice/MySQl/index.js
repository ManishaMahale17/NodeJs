//config.js
const mysql= require('mysql');
const conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'edyoda'
});
conn.connect((err)=>{
    if(err)
    {
        console.log('Error');
    }
   else
   {
    console.log('Connect');
   }
})
conn.query('SELECT * FROM persons',(err,result)=>{
    console.log('result',result);

})



// <!-- get API with mysql -->
const express=require('express');
const conn=require('./config');
const app= express();

app.get("/",(req,res)=>{
    // res.send('Route Done');
    conn.query('select * from persons',(err,result)=>{
    if(err){
        res.send('error')
    }
    else{
        res.send(result)
    }
    })
})
app.listen(5001)

//make post API for static data
app.post("/",(req,res)=>{
   const data={name:"manuu",password:"ykjj",city:"Pune"};//static data 
   conn.query('insert into persons SET?',data,(error,result,fields)=>{
    if(error) error;
    res.send(result);

   })
})
app.listen(5001)
//make post API for dyanamic(from postman) data
app.use(express.json())//parse data from json
app.post("/",(req,res)=>{
    const data=req.body;
    conn.query('insert into persons SET?',data,(error,result,fields)=>{
     if(error) error;
     res.send(result);
 
    })
 })
 app.listen(5001)

 //PUT API:update data
 //static data:
 app.put('/',(req,res)=>{
    const data=["vaibhav","9frrt","mumbai",2]
    conn.query('UPDATE user SET name = ?,password = ?,city = ?,where id=?',data,(err,result,feild)=>{
        if(err) error;
        res.send(result);
    
    })
    // res.send("update API working");
 })
 app.listen(5001)

 //dynamically data update data

 //http://localhost:5001/2
//  {
//     "name":"Manuuu",
//     "password":"fshs",
//     "city":"hhhs"

//  }

 app.put('/:id',(req,res)=>{
    const data=[req.body.name,req.body.password,req.body.city,req.body.id]
    conn.query('UPDATE user SET name = ?,password = ?,city = ?,where id=?',data,(err,result,feild)=>{
        if(err) error;
        res.send(result);
    
    })
 })
 app.listen(5001)

 //Delete data
 app.delete("/id",(req,res)=>{
    conn.query("delete from person where id="+ req.params.id,(err,res),feild=>{
        if(err) throw error(
            res.send(results)
        )
    })
    res.send(req.params.id)//to get id on postman
 })

 app.listen(5001)










