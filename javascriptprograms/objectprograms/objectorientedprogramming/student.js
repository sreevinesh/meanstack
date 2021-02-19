class student{
    static college="luminar"
    constructor(rol,name,course){
        this.rol=rol;
        this.name=name;
        this.course=course;
    }
    printStudent(){
        console.log(this.rol+","+this.name+","+this.course+","+student.college);
    }
}
var stud=new student(100,"ram","bca")
stud.printStudent()

var stud2=new student(102,"sooraj","bsc")
stud2.printStudent()
console.log(student.college);

