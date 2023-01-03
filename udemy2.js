let nam="mahadev"

let obj={
    name:nam,
    age:`${nam} age is 22`,
    surname:'bhimani'
}
obj["gender"]="male"
obj['name']='shinti'

console.log(obj.name)        
console.log(obj)
console.table(obj)

let {name,age,surname}=obj                //destructure of object
console.log(name)
console.log(age)
console.log(surname)


let firstname="parth"
let lastname="bhimani"
let object={
    firstname,
    lastname
}
console.log(object.firstname)
console.log(object)

let n="nn"
console.log(n)     
let h="my name is neel"
const harr=(h.split(" "))
console.log(harr)


let array6=[6,5,7,8,909,9]
let r=array6.pop()
console.log(array6,r)

array6.splice(1,2,"jk")
console.log(array6)