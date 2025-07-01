// Creating input
const input = document.createElement("input");
document.body.appendChild(input)
input.placeholder = "Press Ctrl + Shift to write text"
// Focus on input using key down event
document.addEventListener('keydown',function(event){
    if (event.ctrlKey && event.shiftKey){
        input.focus()
    }
})

// Creating button
const button = document.createElement("button");
document.body.appendChild(button)
button.textContent = "enter"
button.addEventListener('click',function(){
    const p =document.createElement("p");
    document.body.appendChild(p);
    p.textContent = input.value
})