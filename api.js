fetch("https://reqres.in/api/user")
.then((response)=>{
    return ("api:",response.json());
})
.then((data)=>{
    //console.log(("data is:",data))
    var joke=data.value
    console.log(joke)

})
.catch();

