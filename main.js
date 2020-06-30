/******************
 * YOUR CODE HERE *
 ******************/

const indexedChars =function(str){
  //keep count
  let result = "";
for(let i = 0; i < str.length; i++){
  //perfect copy of the string
result +=  i + str[i]
}


  return result;
}

const exclaim = function(str){
  let result ='';
for(let i = 0; i < str.length; i++){
  if(str[i]=== '?'){

    result += '!'

  }
  else if (str[i]==="."){
    result += "!"

  }
  else{
    result = result + str[i]

  }
}




  return result;
}

const repeatIt = function(str, num){
  let result ='';

  for(let i = 0; i < num; i++){
 result += str  
 
  }
return result
}



// const repeatIt(){
//   let result="";


// }
// console.log(result)

const truncate = function(str){
  //make an empty string for the result
  let result= "";
  //loop through the original string
  for(let i = 0; i < str.length; i++){
//grab original number
let num = str[i]
//if it's more than 15, add ellipsis 
    if(i == 15  && str.length > 18){
return result + "...";

    }
    else if(i < 15 || i <= 18){
result = result + num;
    }
  }
  return result;

}



// const ciEmailify = function(str){
//   for(let i =0; i<str.length; i++){
//     let result= "";
// if(str[i]===" "){
// result = result + ".";

// }
// else{result = result + str[i].toLowerCase()

// }

// }
//   return result + '@codeimmersives.com'

// }

const ciEmailify = function(name){


let answer = '';
for (let i = 0; i < name.length; i++){
  if(name[i] === ' '){
    answer = answer + '.';
  }else {
    answer = answer + name[i];
  }
}
return answer.toLowerCase() + '@codeimmersives.com';

}
const reverse = function(str){
  let reversed = "";    
  for (let i = str.length - 1; i >= 0; i--){        
    reversed += str[i];
  }    
  return reversed;
}

const onlyVowels = function(str){
  for(let i = 0; i < str.length; i++){
    let reuslt= "";
    let strA = str[i]
    if(strA=== "a" || strA=== "e"){

    }
  }
}



 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
