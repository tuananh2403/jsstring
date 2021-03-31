// Xóa Khoảng Trắng 
let str=window.prompt();
str = str.trim();
function space(str){
  for (let i = 0; i <= str.length; i++){
    if (str.charAt(i) === " "){
      str = str.slice(0 , i) + str.slice(i+1);
    }
    console.log(str);
  }
  return str;
}
console.log(space(str));