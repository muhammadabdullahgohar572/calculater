const input1=document.getElementById("input1")
const buttons = document.querySelectorAll("button")

for (const btn of buttons) {
  
  btn.addEventListener("click",(e)=>{
     switch (e.target.value) {
        case "=":
     
            input1.value=eval(input1.value);
            break;
     case "AC":
     input1.value=""

     case "DEL":
        input1.value=input1.value.slice(0,-1);
     break;
        default:
            input1.value+=e.target.value
            break;
     }
    })
}
function color(value) {
   document.body.style.background=value;
}
