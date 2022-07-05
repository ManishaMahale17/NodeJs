//access dom element
const textArea = document.getElementById("content");
const charactersCount = document.getElementById("cCount");
const wordsCount = document.getElementById("wCount");


//set function
//give live input on text area

textArea.oninput = () => {
 let characters = textArea.value;
 //avoid white spaces in counting then use regular exppression 
 // use \s for match ehite space  not count white places /g for apply all white spaces
 charactersCount.textContent = characters.replace(/\s/g,'').length;
  
 //for word counting
 //split method used to white spaces of array and call filter method indivisual items

 let words = textArea.value.split(' ').filter((item) => {
     return item != '';
 });
 wordsCount.textContent = words.length;


};

