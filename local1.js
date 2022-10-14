let email = document.querySelector(".email")
let password = document.querySelector(".password")
let repeat = document.querySelector(".repeat")
let save = document.querySelector(".save")
let secret = document.querySelector(".secret") 
let  arr = JSON.parse(localStorage.getItem("users")) || []
save.addEventListener("click", function(){
    let ind = arr.findIndex(x=> x.email == email.value)
    if(ind == -1){
        if(password.value == repeat.value && repeat.value.length > 7
            && repeat.value.toLowerCase() != password.value && secret.value != ""){
              let obj = {
                email:email.value,
                password:password.value,
                secret:secret.value
              }
              arr.push(obj)
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
