var num1=153;
var n=num1;
var r;
sum1=0;

while(num1!=0){
    r=num1%10;
    num1=Math.floor(num1/10);
    sum1=sum1+(r*r*r);
}
console.log(sum1);