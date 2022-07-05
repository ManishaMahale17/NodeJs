const fs = require('fs')
/*
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(err, data)
}) //null This is a File
*/
const a = fs.readFileSync('file.txt')
console.log(a.toString())
console.log('Fisnished reading file')
//This is a File
//Fisnished reading file
//weritefilesyn=> ist path ghein nantr data ghein

//import * as fs from 'fs/promises';=>>>es6 module
//const fs = require('fs');=>>>>common js module
//
