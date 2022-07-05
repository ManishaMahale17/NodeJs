const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'files')
const filePath = `${dirPath}/hello1.txt`
//__________to create file in files folder we got 4 files
/* wrte file in \PERN\NodeJs\Utube\simpleapi\filemodule>files folder
for (i = 0; i < 4; i++) {
  fs.writeFileSync(dirPath + '/hello' + i + '.txt', 'A simple file')
  // or fs.writeFileSync(`hello ${i}.txt`,"A simple file")
///
}
*/
/*
//___________read files only____________
fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log('File name is:' + item)
    /*
  File name is:hello0.txt
  File name is:hello1.txt
File name is:hello2.txt
File name is:hello3.txt
  })
})
*/
/*
//---------read data in that file eg hello1.txt
fs.readFile(filePath, 'utf8', (err, item) => {
  console.log(item)//A simple file data of hello1.

})
*/

/*
//----------update-----------
fs.appendFile(filePath, 'and file name is hello1.txt', (err) => {
  if (!err) console.log('File is updated')//File is updated
  //output=>check hello1.txt file-A simple file data of hello1.and file name is hello1.txt
})
*/
/*
//_________Rename_______
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
  if (!err) console.log('File name is rename')
  //o/p-File name is rename ,the old file hello1 is rename  file will generated
})
*/
// _______________delete file_________
fs.unlinkSync(`${dirPath}/fruit.txt`) //delete file from files
//Buffer:
//Buffer is a tempory file location like RAM to  node js needs to perform opertion
