// var arr=[[2500,"ravi"],[2800,"raju"],[1500,"varun"],[2900,"amit"]]
// arr.sort((o1,o2)=>o1[0]-o2[0])

var text = "hai hello hai hai hai hello";
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

elements=[]
for(let key in dic){
    elements.push([dic[key],key])
}

// elements.sort(o1,o2)=>o1[0]-o2[0]
console.log(elements);