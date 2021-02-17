var text = "hai hello hai hello";
//hai=2,hello=2
var words = text.split(" ")
console.log(words);

var dic = {}

for (let word of words) {
    if (word in dic) {
        dic[word] += 1

    }
    else {
        dic[word] = 1
    }

}
console.log(dic);