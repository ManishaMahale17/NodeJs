/*
module.exports = {
  x: 10,
  y: 20,
  z: function () {
    var arr = [2, 3, 4]
    return 10
  },
}
*/
/*
empData = {
  name: 'Manisha',
  favnum: 17,
  developer: true,
}
module.exports = empData
*/

//module wrapper function
//function(exports,require,module,__filename,__dirname){}we dont need to wrspped this bcz nodejs automatically wrapped this function
empData = {
  name: 'Manisha',
  favnum: 17,
  developer: true,
}
console.log((exports, require, module, __filename, __dirname))
module.exports = empData
//output
//D:\PERN\JsUdemy\Fundamental2\Modulee
//Hello { name: 'Manisha', favnum: 17, developer: true }
