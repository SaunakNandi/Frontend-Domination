import React from 'react';

const Cat = () => {
    const {data:catData}=useQuery(["cat"],async()=>{
        return axios.get("https://catfact.ninja/fact").then((res)=>res.data)
    })
    return (
        <div>
            <h1>{catData?.fact}</h1>
        </div>
    );
}

export default Cat;
