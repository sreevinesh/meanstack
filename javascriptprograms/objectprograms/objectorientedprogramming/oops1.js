//class
//object
//reference
class Person {
    addPerson(name, age, gender) {
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
var obj1 = new Person()
obj1.addPerson("vinesh",21,"male")
obj1.printPerson()