// let firstname="neel"
// let lastname='bhimani'
//  let name=`my name is ${firstname} ${lastname}`
// console.log(name)
// console.log("my name is "+"neel")
function getname(a,b){
    return `${a} ${b}`
    
}
console.log(getname("neel","bhimani"))

let name2=`hello ${getname("neel","mahadev")}`; //or let name2=getname("neel","mahadev")
console.log(name2)  

//let msum=(num2,num2,neel)=>(console.log(meet+num2+neel))
let sum1=(num1,num2,...args)=>{
    console.log(num1)
    console.log(num2)                                               // rest operator
    console.log(args)
    let sum=num1+num2   // sum=0 gives sum of args...
    for(let i=0;i<args.length;i++){
        sum +=args[i]
        // console.log(sum)
    }
    
    
    console.log(sum)
}

sum1(9,2,3,4,5,6)   

// spread operator 


let v=[5,6,7,8,9]
let c=([...v])
 let arr=[5,6,7,8]
let arr2=arr.concat(v)
console.log(arr2)
//v.push(7)
//console.log(v)
//console.log(c)
let array=[...v,...arr]
console.log(array)

let obj1={
    nam:"neel"
}
    
let obj2={
    name:"MAHADEV"
}


let obj3={...obj1,...obj2}
console.log(obj3)
