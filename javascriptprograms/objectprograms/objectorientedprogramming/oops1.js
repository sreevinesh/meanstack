//class
//object
//reference
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    printPerson() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);

    }
}
var obj1 = new Person("akhil",21);
console.log(obj1.name);