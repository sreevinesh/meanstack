var clck=document.querySelector("#clk")
clck.addEventListener("click",()=>{
    clck.textContent="clicked";
    clck.style.color="red";
})

var dblk=document.querySelector("#dbclk")
dblk.addEventListener("dblclick",()=>{
    dblk.textContent="doubleclicked";
    dblk.style.color="pink";
})


var mouse=document.querySelector("#over")
mouse.addEventListener("mouseover",()=>{
mouse.textContent="over";
mouse.style.color="blue";
})
var muse=document.querySelector("#over")
muse.addEventListener("mouseout",()=>{
muse.textContent="out";
muse.style.color="green";
})