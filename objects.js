
let user={
    name:"neel",
    lastname:"bhimani",
    middlename:"pareshbhai",
    courselist:[],
    buycourse: function (coursename){
        this.courselist.push(coursename)
    },
    
        getcoursecount: function (){
        return `${this.name} is enrolled in total of ${this.courselist.length} courses`   // this.name instead if that we can also use user.name that give us not an error
    },

}
let courselist=true;

console.log(user.getcoursecount())
user.buycourse("react js")
user.buycourse("Angular js")
console.log(user.courselist)
console.log(user.getcoursecount())
console.log(user.middlename.length)
// console.log(user.middlename)
// console.log(user.lastname)
// console.log(typeof user.lastname)
// user["shinti"]="bunty"
// console.log(user)
// user["lastname"]="mahadev"
// console.log(user)
// user.lastname="bhimani"
console.log(user)
console.table(user)
user={
    name:"neel",
    lastname:"bhimani",
    middlename:"pareshbhai",
}
console.table(user)