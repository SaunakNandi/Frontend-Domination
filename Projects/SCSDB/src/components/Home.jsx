import React, { useState,useEffect } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios'
import Header from './partials/Header';

const Home = () => {
    document.title='Movie App'
    const [wallpaper, setWallpaper]=useState(null)

    const GetHeaderWallpaper=async()=>{
        try{
            const {data}=await axios.get(`/trending/all/day`)
            let random_data=data.results[(Math.random()*data.results.length).toFixed()]
            setWallpaper(random_data)
        }
        catch(err)
        {
            console.log("Error ",err)
        }
    }
    console.log(wallpaper)
    useEffect(()=>{
        !wallpaper && GetHeaderWallpaper()
    },[])
    return wallpaper? (
        <>
            <Sidenav/>
            <div className='w-[80%] h-full'>
                <Topnav/>
                <Header wallpaper={wallpaper}/>
            </div>
        </>
    ):<h1>Loading</h1>
}

export default Home;
