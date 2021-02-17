function factorial(num){
    var fact=1;
    for(let i=1;i<=5;i++){
        fact=fact*i;
    }
    return fact;
}
var res=factorial(5)
console.log(res);