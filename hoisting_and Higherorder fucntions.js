console.log(a)
greet();  // this called hoisting in JS which allows us to run function or access its value before initialization or before declaration it is only happens with var.. let and const does not allow us to hoisting data, see in the a value it doesnot throw error while we run the console before it's declaration in the first line its simply says undefined thats means in the global context of js it's declaration is done but varieble a's value is not set...but if we try to do the same with let or const its throws the error that cannot access a before it's initialization.
function greet(){
    
    // var a =5+6
    console.log("my name is neel",a)
    var  a=5+6
} 
(greet())

var a=7+7
console.log(a)
