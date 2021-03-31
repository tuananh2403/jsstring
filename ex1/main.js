
let str=window.prompt();
function space(str){
  let count = 0;
  for (let i = 0; i <= str.length; i++){
    if (str.charAt(i) === " "){
      count++;
    }
  }
  return count;
}
console.log(space(str));