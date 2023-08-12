// getting input from cmd line:
// <!-- process.argv:it is big object used to get input from cmd line
//     eg: console.log(process.argv)
//     *node ./index.js 1000
//     * node ./index.js "hi"
//     console.log(process.argv[2])//get 1000
//     --we get 100 in cmd line
//  -->
const fs=require('fs');
const input=process.argv;
fs.writeFileSync(input[2],input[3]);
// node .\index.js processargv.txt 'This is example of Process argv'
                    //   |input[2]        |input[3]
                    //   name of file      text in file

//processargv.txt automatically craeted