//Node js is not a language it is runtime environment runs js code using v8 engine
//Node js single threded: eka veli ekch instruction follow hote
//Node js is Server side scripting language or client side scripting language?
//Node js is not a langulage it is a runtime environment for run js code on server
//REPL: read evaluate print loop=>when we run nodejs on cmd then frist input read then evalute then print and then loop runs
console.log('Hello manishaa')
console.log(4 + 4) //8
console.log('4' + 4) //4 4
var a = 10
var b = 20
var c = a + b
c += a
console.log(c) //40
//using let
let aa = 10
let bb = 20
let cc = aa + bb
console.log(cc) //30

//using const
const ab = 10
const ba = 20
const ca = ab + ba //30

console.log(ca)
console.log('-----------------')
//
var x = 20
if (x === 20) {
  console.log('matched') //matched
} else {
  console.log('not matched') //not matched : var x='20'bcz its a string it is compare type
}
var xy = '20'
if (xy == 20) {
  console.log('matched') //matched
} else {
  console.log('not matched') //matched : var x='20' its a string
  //20 is the string but we compare == its is not compare type
}
console.log('-----------------')
//for loop
for (var i = 0; i <= 3; i++) {
  console.log(i) //0 1 2 3
}
console.log(i) //4
console.log('________________')
for (let i = 0; i <= 3; i++) {
  console.log(i) //0 1 2 3
}
console.log(i) //4
console.log('________________')
/*for (const n = 0; n <= 3; n++) {
  console.log(n) //error assignment to const varible
}*/
/*
complex data types such as objects and arrays are passed by reference. 
The variable identifier holds the reference, not the actual "value". 
So even if the object's properties and methods are altered, it does not change the actual reference.
*/
//array
var arry = [2, 3, 4, 5, 6]
console.log(arry) //[2, 3, 4, 5, 6]

var arry = [4, 5, 6, 7]
console.log(arry) //[4, 5, 6, 7]

const arr = [2, 3, 4, 5, 7, 6]
console.log(arr) //[2, 3, 4, 5, 7, 6]
//const arr = [9, 5, 49, 50, 7, 6] it is not possible

arr[2] = 8
console.log(arr) //[2, 3, 8, 5, 7, 6]
let array = [2, 3, 4, 5, 7, 6]
console.log(array) //[ 2, 3, 4, 5, 7, 6 ]
//let array = [2, 3, 4, 5, 7, 6]//error-redeclartion is not possible

//object
const person = {
  first_name: 'Manu',
  last_name: 'Tambe',
  age: 29,
  city: 'Belapur',
}
console.log(person) //{ first_name: 'Manu', last_name: 'Tambe', age: 29, city: 'Belapur' }
/* 
It is  not to directly change object possioible
const person = {
    first_name: 'Vaibhav',
    last_name: 'Tambe',
    age: 29,
    city: 'Belapur',
  }
  */
person.first_name = 'Vaibhav'
person.last_name = 'Tambe'
person.age = 30
person.city = 'Mumbai'
console.log(person) //{ first_name: 'Vaibhav', last_name: 'Tambe', age: 30, city: 'Mumbai' }
