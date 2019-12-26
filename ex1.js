function newArray(a,b){
var e=0;
var newArr=[];
for(i=0;i<a.length;i++){

	if(b<a[i]){
		newArr[e]=a[i];
		e++;

	}
}
if(newArr.length>0){

return newArr;
}else{
 return "Such values does not exist";}

}

var arr=[1,2,3,4,5,6,7,20];
var num=16;

console.log(newArray(arr,num));