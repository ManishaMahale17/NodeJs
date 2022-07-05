const expor = require('./expor') //expor jis file se aaya hai wo
const empData = require('./expor.js')
console.log('Hello', empData) //node ./index.js
//Hello { name: 'Manisha', favnum: 17, developer: true }

console.log(expor) //{x:10,y:20}
console.log('X is:' + expor.x) //10
console.log('Y is:' + expor.y) //20
console.log(expor.z()) //10
//filter function
const arra = [3, 4, 6, 7, 8]
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array.
arra.filter((item) => {
  console.log(item) //3 4 6 7 8 : loop karto
})
let res = arra.filter((item) => {
  return item > 6
})
console.log(res) //7 8
/*
//Modules: it is same as js libraries
a set of function you want to include in your application
1)Core module:built in modules fs ,http,buffer
2)Global: no need to import:eg console.lg("...."),
eg console.log(__dirname,__filename)etc
3)Non-global: need to import eg.fs.writeFileSync("...")
nned to fs import like const fs=require('fs)
const fs=require('fs').writeFileSync;
fs("abc.txt","Data in abc file")-> abc.txt name file generated in folder and in wicth data is avaible ie. Data in abc file
*/
