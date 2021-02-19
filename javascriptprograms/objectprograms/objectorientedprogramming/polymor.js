//method over loading
//method over riding
class Maths {
    add(num) {
        console.log("inside single attri method");
    }
    add(num1, num2) {
        console.log("inside two arg method");
    }
    add(num1, num2, num3) {
        console.log("inside three argmnt method");
    }
}
var obj = new Maths()
obj.add(1, 2, 3, 4)



