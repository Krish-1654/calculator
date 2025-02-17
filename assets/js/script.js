const v1err = document.querySelector("#v1err")
const value1 = document.querySelector("#v1")
const v2err = document.querySelector("#v2err")
const value2 = document.querySelector("#v2")
const ans = document.querySelector("#ans")


function cal(method) {
const v1 = value1.value
const v2 = value2.value

   if (v1 == "" && v2 == "") {
        v1err.innerHTML = "Enter Value"
        v2err.innerHTML = "Enter Value"
        ans.innerHTML =""
        return
   } else if(v1 == "") {
    v1err.innerHTML = "Enter Value"
    v2err.innerHTML = ""
    ans.innerHTML =""
    return
   }else if(v2 == ""){
    v1err.innerHTML = ""
    v2err.innerHTML = "Enter Value"
    ans.innerHTML =""
    return
   }
   

   switch (method) {
    case '+':
        ans.innerHTML = Number(v1) + Number(v2)
        break;
    case '-':
        ans.innerHTML = Number(v1) - Number(v2)
        break;
    case '/':
        ans.innerHTML = Number(v1) / Number(v2)
        break;
    case '*':
        ans.innerHTML = Number(v1) * Number(v2)
        break;
    case '%':
        ans.innerHTML = Number(v1) % Number(v2)
        break;
   
    default:
        break;
   }
   v1err.innerHTML =""
   v2err.innerHTML =""
}