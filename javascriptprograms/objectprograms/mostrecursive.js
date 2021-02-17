var text = "hai hello hello hello hai hello hai"
var words = text.split(" ")
var dec = {}
var flag=0
var temp;

for (let word of words) {
    if (word in dec) {
        if(dec[word]>flag)
        {
         flag=dec[word];  
         temp=word;
        }
            
        dec[word] += 1
        
    }
    else {
        dec[word] = 1
    }
}
console.log(dec);
console.log(temp);
