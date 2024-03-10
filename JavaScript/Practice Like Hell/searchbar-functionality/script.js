var data=[
    {name:'harsh',src:"https://images.unsplash.com/photo-1484517186945-df8151a1a871?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:'nanndy',src:"https://images.unsplash.com/photo-1488371934083-edb7857977df?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:'nandu',src:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name:'nandini',src:"https://images.pexels.com/photos/2434049/pexels-photo-2434049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name:'harshista',src:"https://images.pexels.com/photos/1958716/pexels-photo-1958716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
]

function utility(data)
{
    var pers=``
    data.forEach((item)=>{
        pers +=`</div><div class="person">
        <div class="img">
            <img src=${item.src} alt="">
        </div>
        <h4>${item.name}</h4>
    </div>`
    })
    document.querySelector('.people').innerHTML=pers
}
utility(data)
input=document.querySelector('input')
input.addEventListener('input',()=>{
    let match=data.filter((e)=>{
        return e.name.startsWith(input.value)
    })
    utility(match)
})