var form=document.querySelector('form');
var inp1=document.querySelector('#input1')
var inp2=document.querySelector('#input2')

const nameRegex = /^[a-zA-Z]+(?:['\s][a-zA-Z]+)*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

form.addEventListener('submit',function(e){
    e.preventDefault()
    let val1=inp1.value
    let val2=inp2.value
    try {
        if(!nameRegex.test(val1))
            throw new Error("Something is wrong")
        
        if(!emailRegex.test(val2))
            throw new Error("Something is wrong")
        } 
        catch (error) {
            throw error
    }
    this.reset()
})


