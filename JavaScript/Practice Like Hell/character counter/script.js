var textarea=document.querySelector('textarea')
var counter=document.querySelector('span')
textarea.addEventListener('input',(e)=>{
    counter.textContent= textarea.value.length
})