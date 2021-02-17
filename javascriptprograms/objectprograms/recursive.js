var text="ABBACB"


var dec={}

for(let ch of text){
    if(ch in dec){
        console.log("recursive is "+ch);
        break
    }
    else{
        dec[ch]=1
    }
}
