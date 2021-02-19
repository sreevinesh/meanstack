//map
var arr=[2,4,5,6,7,8]

// var data=arr.map(num1=>num1**2)
// console.log(data);

// //filter
// var data2=arr.filter(num1=>num1%2==0)
// console.log(data2);

// //reduce
// var sum=arr.reduce((num1,num2)=>num1+num2)
// console.log(sum);
// var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(max);

arr.sort((o1,o2)=>o1>o2?-1:1).forEach(o=>console.log(o))