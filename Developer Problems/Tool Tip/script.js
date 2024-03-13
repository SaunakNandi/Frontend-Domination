document.querySelector('#hide').addEventListener('mouseenter',()=>{
    document.querySelector('.tooltip').style.display = 'block';
})
document.querySelector('#hide').addEventListener('mouseleave',()=>{
    document.querySelector('.tooltip').style.display = 'none';
})