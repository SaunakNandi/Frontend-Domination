var home=document.querySelector('#btn1')
var about=document.querySelector('#btn2')
var contact=document.querySelector('#btn3')
var hometext=document.querySelector('#home')
var abouttext=document.querySelector('#about')
var contacttext=document.querySelector('#contact')
var h3=document.querySelectorAll('h3')

function solve(tag)
{
    h3.forEach((item)=>{
        item.style.display="none"
    })
    tag.style.display="block"
    tag.style.width="50%"
}
btn1.addEventListener('click',()=>{
   solve(hometext)
})
btn2.addEventListener('click',()=>{
    solve(abouttext)
})
btn3.addEventListener('click',()=>{
   solve(contacttext)
})