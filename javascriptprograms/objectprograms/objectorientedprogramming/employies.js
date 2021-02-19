class Employee{
    constructor(id,name,desig,salaray){
        this.id=id
        this.name=name
        this.desig=desig
        this.salaray=salaray
    }
}
var obj=new Employee(100,"ajay","developer",25000)
var obj1=new Employee(101,"vijay","developer",26000)
var obj2=new Employee(102,"rahul","qa",20000)
var obj3=new Employee(103,"arun","qa",28000)
var employee=[]
employee.push(obj)
employee.push(obj1)
employee.push(obj2)
employee.push(obj3)
for(let emp of employee){
    if(emp.desig=="developer"){
        console.log(emp);
    }
}
ename=employee.map(emp=>emp.name.toUpperCase())
console.log(ename);

employee.filter(emp=>emp.desig=="developer").forEach(o=>console.log(o.name))

var maxsal=employee.map(emp=>emp.salaray).reduce((num1,num2)=>num1>num2?num1:num2)
console.log(maxsal);
employee.sort((emp1,emp2)=>emp1.sal>emp2.sal?-1:1).forEach(emp=>console.log(emp))