var num1=12;
var num2=8;
var num3=10;
if((num1>num2)&(num1>num3)){
    console.log("num1 is lrgst");
    if(num2>num3){
        console.log("num2 is scnd lrgst");
    }
    else{
        console.log("num3 is scnd lrgst");
    }
}
else if((num2>num1)&(num2>num3)){
    console.log("num2 is lrgst");
    if(num1>num3){
        console.log("num1 is scnd lrgst");
    }    
    else{
        console.log("num3 is scnd lrgst");
    }
}
else if((num3>num1)&(num3>num2)){
    console.log("num3 is lrgst");
    if(num1>num2)
    {
        console.log("num1 is scnd lrgst");
    }
    else{
        console.log("num2 is scnd lrgst");
    }
}








