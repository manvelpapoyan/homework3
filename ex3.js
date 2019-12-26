function oddDigit(a){
var digit;
digit=a%10;
var bool=true;
if(digit%2===0 && digit>0){
 bool=false;
}
if(bool===true && digit>0){
  return oddDigit((a-digit)/10)
}
if(bool===false){
  return "false";
}
else return "true"; 
}


console.log(oddDigit(13579));