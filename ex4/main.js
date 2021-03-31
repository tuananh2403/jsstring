let str = window.prompt('String one : ');
let str2 =  window.prompt('String two : ');
function address (str,str2){
  let add= str.indexOf(str2);
  return add;
}
console.log(address(str,str2));