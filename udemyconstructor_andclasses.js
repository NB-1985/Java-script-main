class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    list=[];

    getinfo=()=>{
        return `name is ${this.name} and age is ${this.age}`
    }
    coursename(course){
        this.list.push(course)
    }
    courselist(){
        return this.list;
    }
}




//module.exports=person;
let neel=new person("shinti",18)
console.log(neel.getinfo())
neel.coursename("java script")   
console.table(neel.list)
console.log(neel.courselist())

//module.exports=person;
// function c(name){
//     return (`the name is ${name}`)
// }
// let a=c("neel")
// console.log(a)

