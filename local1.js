// var clear = document.querySelector(".clear")
// clear.addEventListener("click", function(){
// localStorage.clear()

// })
// var psw1 = document.querySelector(".psw1")
// var psw2 = document.querySelector(".psw2")
// var chkpsw = document.querySelector(".chkpsw")

// function myFunction(){

 

//     if(psw1.type ==="password" && psw2.type==="password"){
//         psw1.type = "text";
//         psw2.type = "text";
//     }
//     else{psw1.type = "password";
//     psw2.type = "password"}
// }



// chkpsw.addEventListener("click", function(){

//         if(psw1.value == psw2.value){
//             chkpsw.style.backgroundColor = "green"
//             chkpsw.style.color = "white"
//             chkpsw.innerHTML = "Confirmed"
//             console.log("OK")
//         }
//         else{
//             chkpsw.style.backgroundColor = "red"
//             chkpsw.style.color = "white"
//             chkpsw.innerHTML = "Passwords do not match"
//             console.log("error")
//         }
//     }
// )

let email = document.querySelector(".email")
let password = document.querySelector(".password")
let login = document.querySelector(".login")
let hint = document.querySelector(".hint")
let arr = JSON.parse(localStorage.getItem("users"))
let pswhint = JSON.parse(localStorage.getItem("hint"))   
console.log(arr)
login.addEventListener("click",function(){
    let x = arr.filter(i=> i.email == email.value && i.password == password.value)
    if(x.length != 0){
        console.log("login successfully")
    }
    else{
        console.log("login failed")
    }

})
