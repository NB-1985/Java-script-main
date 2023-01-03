function user(name){
    if(name%2===0){
        console.log("element is devided by 2")
    }
    else{
        console.log("element is not devided by 2")
    }
    console.log("the name name is neel")

    
}

user(5)

let user1={


    list:[],
    java: function (shinti){
        this.list.push(shinti)     // this.list ni jagya e user.list pan lakhi sakay
    }
}
    
console.log(user1)
user1.java("batli")
user1.java("royal");
console.log(user1.list)


user1.list.forEach(element =>console.log(element))


