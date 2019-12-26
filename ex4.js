function minimal(a){
    if(a[i]>a[j]){ 
      a[i]=a[j]; 
    }
    j++
    if(a.length>=j){
      return minimal(a);
    }
    
    if(a[i]>=0){
    return a[i];
    }else{ 
    return -1;}
      
}
 
  var i=0;
  var j=0;
  var arr=[88,9,11,8,2,0,7,3,6,4,5,-20];
 
  console.log(minimal(arr));