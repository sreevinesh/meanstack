var num1=2;
var num2=8
var num3=15;
var lrgst;
var smlst;
var scndlrgt;
var sum=num1+num2+num3;
if((num1>num2)&(num1>num3)){ 
    lrgst=num1; 

    if(num2>num3){
        scndlrgt=num2;
    }
        else{
            scndlrgt=num3;

        }
}
    

else if((num2>num3)&(num2>num1)){
    lrgst=num2;

    if(num3>num1){
        scndlrgt=num3;
    }
    else{
        scndlrgt=num1;
    }
}
else if((num3>num1)&(num3>num2)){
    lrgst=num3;

    
    if(num2>num1){
        scndlrgt=num2;
    }
    else{
        scndlrgt=num1;
    }
}
smlst=sum-(lrgst+scndlrgt);
console.log("largest is "+lrgst);
console.log("second lrgst is "+scndlrgt);
console.log("smallest is "+smlst);
console.log("sorted order is "+smlst+","+scndlrgt+","+lrgst);
