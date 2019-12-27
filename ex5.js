function sort(a){
 
 var b=a.length;
 var i=0;
 
  while(b>0){

    if(a[i]>a[i+1]){
     return i+1;
    }
    
  i++;
  b--;
  }

return -1;

}


var arr=[0,1,2,3,4,5,6,7,8];
var arr1=[0,1,2,3,4,-5,6,7,8];

console.log(sort(arr));
console.log(sort(arr1));