onmessage=function(data){
    console.log(data.data)
    const ans=data.data.reduce((acc,item)=>acc+item,0)
    postMessage(ans)
}