const path = require('path')
console.log(path.win32.basename('C:\\temp\\myfile.html'))
//output:myfile.html
console.log(process.env.PATH)
const a = path.parse('C:\\path\\dir\\file.txt')
console.log(
  a,
) /*//{
    root: 'C:\\',
    dir: 'C:\\path\\dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
}
*/
