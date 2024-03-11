const getUser=document.querySelector('#getUser')
function getNewUser()
{
    fetch(`https://randomuser.me/api/`)
.then(raw=> raw.json())
.then(result=> 
    {
    const {name,email,gender,picture}=result.results[0]
    console.log(result.results[0])
    document.querySelector('#parent').innerHTML +=`<div class="card w-60 p-4 rounded-md bg-zinc-800">
                <div class="w-32 h-20 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
                    <img src="${picture.medium}" alt="" class="w-full h-full fit-cover">
                </div>
                <h3 class="font-semibold text-2xl">${name.first}</h3>
                <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
                <h6 class="text-sm opacity-40">${email}</h6>
                <p class="mt-5 text-xs font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente beatae explicabo obcaecati necessitatibus voluptates excepturi quidem vero laborum magnam quas?</p>
            </div>`
})
}

getUser.addEventListener('click',()=>{
    getNewUser()
})