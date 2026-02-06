let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".btn")
let clearBtn = document.querySelector("#clear");
let equalBtn = document.querySelector("#equals");


let currentInput = "";
buttons.forEach((btn)=>{
    btn.addEventListener("click", function(){
        currentInput = currentInput + btn.textContent;
        display.value = currentInput;
    })
})


function clearInput(){
    currentInput = "";
    display.value = "";
}

clearBtn.addEventListener("click", clearInput);

equalBtn.addEventListener("click", function(){
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
        
    } catch  {
        display.value = "Error";
        currentInput = "";
        
    }
})