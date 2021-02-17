//var number=7;//prime

//7(2,6) 11

var num=11;
var flag=1;
for(i=2;i<num;i++){
    if(num%i==0){
        flag=0;
        break;

    }
    

}
if(flag==0){
    console.log("not prime");
}
else{
    console.log("prime");
}