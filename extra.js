// let a=()=>{console.log("hi")}
// a();

app()

let a;
let b=8;
function app(){
    console.log("har har mahadev")
}

// console.log(window.b) // not defined

function c(o){
    let y=10
    console.log("hello")
        function d(){
            console.log(y,o)
        }
        // console.log(d)
        return d
    }

c(1)()






// let nam="neel"
function name (){
    return(
        `name is ${nam}`
    )
}
let nam="neel"
console.log(name())