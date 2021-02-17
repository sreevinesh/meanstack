var num=1;
var str="";
for(let i=1;i<=2;i++){
   str=""; 
    for(let j=1;j<=i && num<=10;j++){
        // console.log(num++);
        str=str+num+"\t";
        num++;
    }
    console.log(str);
    // console.log("\t");
}