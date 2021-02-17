var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = [];
var even = [];
for (let num of ar)
    if (num % 2 == 0) {
        even.push(num);
    }
    else {
        odd.push(num);
    }
    console.log(even);
    console.log(odd);