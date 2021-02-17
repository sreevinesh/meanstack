var arr = [10, 1, 11, 2, 12, 3]
arr.sort((o1, o2) => o1 - o2)
var low = 0, upp = arr.length - 1;
var flag= 0;

var elem = 12;
while (low <=upp) {
    let mid = Math.floor((low + upp) / 2);
    if (elem > arr[mid]) {
        low = mid + 1;
    }
    else if (elem < arr[mid]) {
        upp = mid - 1;
    }
    else if (elem == arr[mid]) {
        flag += 1;
        break
    }
}
if (flag == 0) {
    console.log("element not found");
}
else {
    console.log("element found");
}