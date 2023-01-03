let login=true
let email=true
let card=false
    
if(login && email && card){
    console.log("successfully logged in")

}
else{
    console.log("you cannot log in")

}

let age=19


console.log( "you can hhhmm,,..." ,(age>18 ? "drive": "not drive")) //turnery operators



// switch in case
let user="user"
// user=parseInt(user)

switch (user) {
    case "admin":
        console.log("you get full access")
        
        break;
        
    case 'subadmin':
        console.log("subadmin")
        
        break;
    case 'testpreps':
        console.log("test papers upload delete access")
        break;
    case 'user':
        console.log("you are a user")
        
        break;


    default:
        console.log("trial user")
        break;
}
console.log(typeof user)

// let name="neel"
// let neel="shinti"
// console.log(neel)
// console.log(name)






