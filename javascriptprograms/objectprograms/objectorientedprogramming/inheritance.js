//single inheritance

class Parent{
    bike(){
        console.log("have passion pro");
    }
}
class Child extends Parent{

}
var ch=new Child()
ch.bike()
var ch1=new Parent()
ch.bike()