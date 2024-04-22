import React from 'react';
import Home from "../Components/Home"
import User from "../Components/User"
import About from "../Components/About"
import {Routes, Route} from "react-router-dom"
import UserDetails from '../Components/UserDetails';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user/" element={<User/>}/>
            <Route path="/user/:name" element={<UserDetails/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
}

export default Routing;
