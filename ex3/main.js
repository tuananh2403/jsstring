//Reverse
let str =  window.prompt("String : ")
function reverse(str){
    let newString = '';
  for(let i = str.length-1 ; i >= 0; i--){
    newString = newString + str.charAt(i);
  }
  return newString;
}
console.log(reverse(str));