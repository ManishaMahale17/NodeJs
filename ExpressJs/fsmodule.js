const fs = require('fs')

//READFILE use to read file
/*
  //callback ready when process is completed 
 fs.readFile('file.txt','utf8' ,(err,data) =>{
  console.log(err,data);
})
//frist print this yhen file content print
console.log("Finished reading file");
*/

//READFILESYNC() method TO READ FILES
/*const a= fs.readFileSync("file.txt");
//console.log(a); output=>buffer 48 69 that cant understand so use toString 
console.log(a.toString());
console.log("Finished reading file");
*/

//FOR WRITE CONTENT IN FILE
/*.writeFile("file2.txt", "Hi file two", ()=>{
   console.log("Written to the file");
 });*/

//FOR WRITEFILESYNC
b = fs.writeFileSync('file2.txt', 'This is data ')
console.log(b)
console.log('Finished Reading')
