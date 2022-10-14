let email = document.querySelector(".email")
let password = document.querySelector(".password")
let login = document.querySelector(".login")
let arr = JSON.parse(localStorage.getItem("users"))
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