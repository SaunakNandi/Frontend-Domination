console.log("Custom Event")

const evt = new Event("anything")

document.querySelector("button").addEventListener("anything",function(){
    console.log("Event triggered")
})

document.querySelector("button").dispatchEvent(evt)

console.log("callback vs promise vs async/await")

function callback(url,func)
{
    fetch(url)
 .then(res=> res.json())
 .then(res=> func(res))
}
callback("https://randomuser.me/api/",function(result){
    console.log(result.results)
})


var promise = new Promise((resolve,reject) =>{
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then((res)=>{
        resolve(res.results)
    })
})

promise.then(res => console.log(res)).catch(()=> console.log("failed"))


async function f()
{
    try {
        const result=await fetch("https://randomuser.me/api/")
        const data=await result.json()
        console.log("async/await")
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }
}
f()


// web workers

var nums=Array.from({length:100000},(_,b)=>b+1)
const worker=new Worker("worker.js")
worker.postMessage(nums)

worker.onmessage=function(data){
    console.log(data.data)
}