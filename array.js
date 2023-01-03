let a=["india","mh",",mp","kerla"]
let b=new Array("4",8,"shinti",true)
console.log(a)
a[4]="himachal"
a.unshift("gujrat")
console.log(a)
//console.log(a.length)
a.pop();
console.log(a)
a.shift();
console.log(a)
console.log(a.indexOf("india"))
console.log(Array.from("neel"))

function iseven(element){          // let iseleven=(element)=>{ } arrow function

    // if ( element %2===0){
    //     return true
    // }
    // return false
    return element %2===0

}
 let c=iseven(4)
 console.log(c)
 console.log(iseven(4))

// function u(e){
//     if(e%2==0){
//         console.log(true)
//     }
//     else
    
//     {console.log(false)}

//     }
// u(4)
let t=[2,4,6,8].every(iseven) 
console.log(t)
     //or                            //this call recallfunction
let r=[6,4,8].every((t)=>t%2===0)
console.log(r)
    //or
    /* let r=[6,4,8,].every((t)=>{
    return t%2==0;
    })
console.log(r)*/

