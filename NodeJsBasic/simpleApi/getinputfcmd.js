/*
console.log(process.argv)
//whn you run on console give  u get output Hello
input =>node filename Helloo hhi
// output===>
'C:\\Program Files\\nodejs\\node.exe',[0]
//'D:\\PERN\\NodeJs\\Utube\\getinputfcmd.js',[1]
//'Hellooo'[2]
*/
//to get one by output
//console.log(process.argv[2])//Hellooo[2] array get
//console.log(process.argv[3])//hhi

//Now to create,add remove file using cmd
/**** 
//create
const fs = require('fs')
const input = process.argv
fs.writeFileSync(input[2], input[3]) //f(file name ,data)
//input[2]=>input ka 2nd parameter
//input[3]=>input ka 3rd parameter
//input=>node .\getinputfcmd.js apple.txt 'This is a fruit'
//output=> create one file apple.txt in that data is "this is a fruit" we get
*/

// add  andd remeve
const fs = require('fs')
const input = process.argv
if (input[2] == 'add') {
  fs.writeFileSync(input[3], input[4])
} else if (input[2] == 'remove') {
  fs.unlinkSync(input[3])
} else {
  console.log('invalid output')
}
//input=> node .\getinputfcmd.js add orange.txt 'This is fruit and color'
//output=>get orange.txt file in that data is 'This is fruit and color'
//input=>//input=> node .\getinputfcmd.js remove orange.txt
//outpu=>>remove the orange .txt file from folder
