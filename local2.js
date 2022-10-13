// LocalStorage.clear()

let email = document.querySelector(".email")
let password = document.querySelector(".password")
let repeat = document.querySelector(".repeat")
let save = document.querySelector(".save") 
let hint = document.querySelector(".hint")
// let pswhint = JSON.parse(localStorage.getItem("hint"))
localStorage.setItem("hint",JSON.stringify(hint))

let arr = JSON.parse(localStorage.getItem("users")) || []
save.addEventListener("click", function(){
    let ind = arr.findIndex(x=> x.email == email.value)
    if(ind == -1){
        if(password.value == repeat.value && repeat.value.length > 7 && repeat.value.toLowerCase() != password.value){
              let obj = {
                email:email.value,
                password:password.value              }
              arr.push(obj,hint)
              localStorage.setItem("users", JSON.stringify(arr))
              console.log(arr)
            }
        else{
            console.log("incorect password")
        }
    }
    else{
        console.log("incorect email")
    }
})