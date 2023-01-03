let listingprice=799
let sellingprice=199
discount=(((listingprice-sellingprice))/listingprice)*100

displaydiscount=Math.round(discount)
console.log("the discounted price is\t",displaydiscount+"% off")

let age=1
//let b=age<9
//console.log(b)
age=parseInt(age)
if(age>=18){
    console.log("you are above 18") }
    else{
        console.log("you are not abouve 18")
    }
