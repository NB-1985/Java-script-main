// let person=require("./udemyconstructor_andclasses")
// let neel=new person("bunty",20)
// console.log(neel.getinfo())
// neel.coursename("java script")
// console.log(neel.list)
// console.log(neel.courselist())


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
     static login(){
        return `you are loged in`
    }
}


class inheritence extends person{          
    constructor(name,age){
        super(name,age);
    }
    getadmininfo(){
        return `i am subadmin`
    }
    login(){
        return ` you are boss`
    }
}
 
let bunty=new inheritence("jigi","78")
console.log(bunty.getadmininfo())
bunty.coursename("java script")
console.log(bunty.list)
console.log(bunty.login())
console.log(bunty.getinfo())