let email = document.querySelector(".email")
let secret = document.querySelector(".secret")
let pass1 = document.querySelector(".pass1")
let pass2 = document.querySelector(".pass2")
let save = document.querySelector(".save")

let  arr = JSON.parse(localStorage.getItem("users"))
console.log(arr)
// console.log(arr.map(i=> i.email).filter(x=> x="Beka"))
console.log(arr.filter(i=> i.email == "bekaa"))

save.addEventListener("click",function(){
    let x = arr.findIndex(i=> i.email == email.value && i.secret == secret.value)
    if(x >= 0){
       if(pass1.value == pass2.value && pass1.value.toLowerCase() != pass2.value
        && pass1.value.length > 7){
        arr[x].password = pass1.value
        localStorage.setItem("users",JSON.stringify(arr))
       }
       else{
        console.log("passwrods does not match")
       }
    }
    else{
        console.log("no such email")
    }
})