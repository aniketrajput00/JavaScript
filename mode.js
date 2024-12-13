let btn=document.createElement("button");
btn.innerText="Change mode";
//btn.onmouse="click";
btn.style.color="black";
document.querySelector("body").append(btn);
let body=document.querySelector("body");
let mode="light";

btn.addEventListener("click",()=>{
   if(mode==="light"){
    mode=("drak");
    body.style.backgroundColor="black";
   }    
   else{
    mode=("light");
    body.style.backgroundColor="white";
   }
   console.log(mode);
})