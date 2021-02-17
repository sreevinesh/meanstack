class Parent{
    m1(){
        console.log("have passion pro");
    }
}
class Child extends Parent{
    m2(){
        console.log("have v3");
    }

}
class SubChild extend child{
    m3(){

    }
}
var ch=new Child()
ch.m3();
ch.m2();
ch.m1();