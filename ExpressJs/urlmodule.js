import url from 'url';

const myURL =new URL('https://example.org');
myURL.pathname='/a/a/c';
myURL.search ='?d=e';
myURL.hash='#fgh';
console.log(myURL);