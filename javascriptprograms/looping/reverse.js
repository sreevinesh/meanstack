var number=123;
var res=0;

while(number!=0){
    var digit=number%10;
    res=res*10+digit;
    number=Math.floor(number/10);
}
console.log(res);
