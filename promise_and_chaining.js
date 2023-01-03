// let name=["neel",6,"shinti"]
// console.log(name.includes("shinti"))   

let a = () => {
    
  
    return ("it is a")
  }

// let b=()=>{

// setTimeout(() => {
// return("HAR HAR MAHADEV ")
//  }, 3000);

//     // return ("it is b")

//     }
let b=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("HAR HAR MAHADEV ");
        }, 3000)
    })
}

  let c=()=>{
    
    return("it is c")
    }
  

a()
b()
c()

let callme=async()=>{
    value1=a();
    console.log(value1)

    value2=await b();
    console.log(value2)

    value3=c();
    console.log(value3)

}


callme()