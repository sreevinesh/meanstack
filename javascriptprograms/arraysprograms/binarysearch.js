// var arr=[114,25,6,11111,2,3];
// arr.sort((o1,o2)=>o2-o1)//decending =>o1-o2//accending
// console.log(arr);

var arr=[1,2,2,2,4,6,5,6]    //[1,4,5,6,6,2,2,2]
var num=6;
p1=0;
var arr1=[];
while(p1<arr.length){
    if(arr[p1]==num){
        arr1.push(arr[p1]);
        arr.splice(p1,1);
        
    }
    else{
        p1++;
    }
    
}
// console.log(arr1);
// console.log(arr);
arr2=arr.concat(arr1);
console.log(arr2);