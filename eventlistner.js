const A=document.getElementById("header")
const b=document.querySelector(".body")
A.addEventListener("click",()=>{
A.style.backgroundcolor="blue"})


b.addEventListener("dblclick",()=>{
   document.body.style.backgroundColor="black"
})


window.addEventListener("click",(e)=>{
    console.log(e.clientX)
})

