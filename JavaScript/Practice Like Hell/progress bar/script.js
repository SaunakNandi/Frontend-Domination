let bar=document.querySelector("#progress-bar");
let text=document.querySelector("#progress-text");

let size=0
    setInterval(()=>{
        bar.style.width=size+"%"
        text.textContent=size+"%"
        size++;
        console
    },200)