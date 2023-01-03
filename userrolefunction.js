function getrolefunction(name,role){
    switch (role) {
        case "admin":
            return(`${name}   is admin with full access`);
            
            break
            
        case 'subadmin':
            return  `${name} is subadmin`       
            break
        case 'testpreps':
            return (`${name}  test papers poad delete access`);
            break;
        case 'user':
            return (`${name}  you are a user`);
            
            break;
    
    
        default:
            return(`${name} is a trial user`)
            break;
    }
}

console.log(getrolefunction("neel","kol"))

// extra
tipp(3)
function tipp(a){
  let bill=parseInt(a);
  
  console.log(bill);
  console.log(bill+23);
}



// let bill=5
// let bill2=bill
// console.log(bill2)