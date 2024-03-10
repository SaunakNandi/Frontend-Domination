let h2=document.querySelector('h2')
let btn1=document.querySelector('#start')
let btn2=document.querySelector('#stop')
let set,i=1
btn1.addEventListener('click',()=>{
    
    set=setInterval(()=>{
        h2.innerText=i++
    },1000)
})
btn2.addEventListener('click',()=>{
    clearInterval(set)
})