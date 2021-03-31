let str = window.prompt("Link face : ");
function idName(str){
    let local = str.lastIndexOf("/");
    let newString=str.slice(local +1);
    return newString;
}
console.log(idName(str));