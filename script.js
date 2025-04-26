let x=document.getElementById("box1");
x.addEventListener("mouseenter",()=>{
let r=Math.floor(Math.random()*100);
x.innerHTML=`<h1>${r}</h1>`
})

x.addEventListener("mouseleave",()=>{
    x.innerHTML=`<h1>1</h1>`
})

let y=document.getElementById("box2");
let clor="green";

y.addEventListener("mouseenter",()=>{
if(clor=="green"){
    y.style.backgroundColor="green";
    clor="red";
}

else if(clor=="red"){
    y.style.backgroundColor="red";
    clor="pink";
}

else{
    y.style.backgroundColor="pink";
    clor="green";
}
});

y.addEventListener("mouseleave",()=>{
    y.style.backgroundColor="white";

})

let z=document.getElementById("box3");
z.addEventListener("mouseenter",()=>{
let c1=Math.floor(Math.random()*256);
let c2=Math.floor(Math.random()*256);
let c3=Math.floor(Math.random()*256);
z.style.backgroundColor=`rgb(${c1},${c2},${c3})`
})

z.addEventListener("mouseleave",()=>{
    z.style.backgroundColor="white";
})


let w=document.getElementById("box4");
w.addEventListener("click",()=>{
let c1=Math.floor(Math.random()*256);
let c2=Math.floor(Math.random()*256);
let c3=Math.floor(Math.random()*256);
x.style.backgroundColor=`rgb(${c3},${c2},${255})`
y.style.backgroundColor=`rgb(${c1},${255},${c2})`
z.style.backgroundColor=`rgb(${255},${c1},${c3})`


})

w.addEventListener("mouseleave",()=>{
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
    z.style.backgroundColor="white";

})


let main=document.getElementById("container");
let crsor=document.getElementById("cursor");
main.addEventListener("mousemove",function (dets){
  crsor.style.left=dets.x+"px";
  crsor.style.top=dets.y+"px";

})



