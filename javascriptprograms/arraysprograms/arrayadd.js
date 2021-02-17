var arr=[3,4,5]
var res=[]
total=0;
for(let num of arr){
    total+=num;
}
for(i=0;i<=2;i++){
    calc=total-arr[i];
    res.push(calc);
}
console.log(res);