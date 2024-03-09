var btn=document.querySelector('button')
var img1=document.querySelector('#left')
var img2=document.querySelector('#right')
btn.addEventListener('click',()=>{
    let img=img1.src
    img1.src=img2.src
    img2.src=img
})