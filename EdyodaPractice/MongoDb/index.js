// mongodb.js for db configuration.

const {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const databaseName='Edyoda';
const client=new MongoClient(url);

async function dbConnect(){
    let result= await client.connect();
    let db=result.db(databaseName);
   return db.collection('products');
    
}
module.exports=dbConnect;

//GET API
const express = require('express');
const dbConnect = require('./mongodb');
const app= express();

app.get('/',async (req,res)=>{
    let data= await dbConnect();
    data=await data.find.toArray();
    console.log(data);
    res.send(data)
});
app.listen(5001)

//POST API
app.use(express.json());//use for post api only
app.post('/',async (req,res)=>{
    let data= await dbConnect();
    let results=await data.insert(req.body)
    res.send(result);
})

//PUT
//static data
app.put('/',async (req,res)=>{
    let data= await dbConnect();
    let result=data.updateOne(
        {name:"Iphone"},
        {$set:{price:900}}
    )
    res.send(result+"updated");
})
//dynamic data
app.put('/name',async(req, res)=>{
    const data=await dbConnect();
    let result=data.updateOne(
        {name:req.params.name},
        {$set:req.body}  
    )
    res.send({status:"updated"})
})
 

// DELETE API

app.delete('/:id',async(req,res)=>{
console.log(req.params.id)
const data=await dbConnect();
const result=data.deleteOne({_id:req.params.id});
res.send("done")
})