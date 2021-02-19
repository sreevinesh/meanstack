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
class SubChild extends Child{
    m3(){
        console.log("have hero");

    }
}
var ch=new Child()
// ch.m3();
ch.m2();
ch.m1();