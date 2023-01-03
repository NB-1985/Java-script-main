let a=["india","russia",89,"gujrat","kerla","RJ",67,78]     //foreach loop

a.forEach((s)=>(console.log(s)))

//for of mostly uses in arrays

let z=["morbi","rajkot","amreli",4,6,1977]
console.log(typeof z)
for(var y of z){
    console.log(y)


}
 

//for in loop  mostly uses in objects
const b={

    "yt":"you tube",
    ig:"instagrame",
    fb:"facebook",

}
console.log(b.yt) //or console.log(b[yt])
for(const a in b){
    console.log(`the key is\t: ${a} and the value is\t:${b[a]}`)
}