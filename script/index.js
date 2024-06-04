let Btn = document.getElementById("calc");
let baseInput = document.getElementById("base");
let heightInput = document.getElementById("height");
let result = document.getElementById("result");

Btn.addEventListener('click', ()=>{
    result.innerText = (1/2)*baseInput.value*heightInput.value
})
