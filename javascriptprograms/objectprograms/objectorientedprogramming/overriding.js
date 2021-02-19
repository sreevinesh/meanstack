class Parent{
    phone()
{
    console.log("nokia");
}
}
class Child extends Parent{
     phone(){
         super.phone()
         console.log("i phn");
     }
}
var obj=new Child()
obj.phone()