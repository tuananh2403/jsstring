let str =window.prompt('Full Name :')
function titleCase(str) {
  str = str.toLowerCase();
  for(let i = 0; i< str.length; i++){
      if (i==0 || str.charAt(i-1) == " "){
          str = str.slice( 0 , i ) + str.charAt(i).toUpperCase() + str.slice(i+1);
      }
    }
    return str;
  }
  
 console.log(titleCase(str));