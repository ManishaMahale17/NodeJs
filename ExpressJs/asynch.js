/*
synchronous opeartions tasks are performed one at a Time
 In Asynchous, second task do not wait to finish the frist task 
 */
/*
console.log('start')
console.log('logic')
console.log('complete')
//output
start
logic
complete
*/
//but i give time to opertion the node doens wait to complete task
/*
console.log('start')
setTimeout(() => {
  console.log('logic')
}),
  3000

console.log('complete')
//output
start
complete
logic
*/
/*
//-----------drawback of asyc programming
let a = 10
let b = 0
setTimeout(() => {
  b = 30
}, 3000)

console.log(a + b)//10 but bcz of asyc preogramming wrong ans we get
//a+b=10+20=30 ans excepted
*/
//how to handle this?
//using promises we can solve this problem-promises use to work on internal data(late data jo deto tithe promises used karyche) and give us output
//promises madhe 2 parameters astat resolve(ok aselk tr) and eeror ala tr reject

//----using promises-----
let a = 10
let b = 0
let waitData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20) //we can pass here number,string,array,objrct etc
  }, 2000)
})
waitData.then((data) => {
  b = data
  console.log(a + b) //after 2 sec we got output 30
})
// How node js work
/*
1)Call stack=>
call stack decides to which function executed frist like main ()
eka function chi execution sampli tr dusri function chi chalu honar

2)Node APIs
don pramming madhli interface mhanje API-> in node js we can use setTimeout() for delay the output
c++(settimeout is the c++ function) and node
stack khali asleli pahije nahitr wait karnar
3)callback queue:
kami time ch ethe yeil node API madhun and part call stack madhun jaun execute hoil
*/
