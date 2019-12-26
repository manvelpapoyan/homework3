function evenDigit(a,b){

var num=0;
var digit=0;
var str="";

while(b>=a){
num =a;
var bool=true;
var bool2=true;
while(num>0){
  digit=num%10;
  if(digit%2!==0){

    bool=false;
    break;
  }
  num=(num-digit)/10;
}
if(bool===false){
  a++;
  continue;
}

if(bool===true){
str=str+a+",";
a++;
}
}
if(str===""){
  str="Such numbers does not exist."}
return str;
}
console.log(evenDigit(1000,10000));