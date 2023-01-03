let a=[1,2,3,4,5]
let array2=a.map((x)=>x*2)      //map
console.log(array2)




let c=[3,4,5,6,7]
let array=c.filter((x)=>x%2===0);       //filter
console.log(array)
console.table(array)



let h=["neel","22","bhimani"]
let [name,age,surname]=h                        //destructure of arrays
console.log(h[0])              
// let name=h[0]
// let age=h[1]
let nam=h[0]
console.log(nam)
console.log(name)
console.log(age)
console.log(surname)

let b="neel"
let u=parseInt(b)
console.log(typeof u)