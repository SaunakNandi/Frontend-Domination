import React from 'react';
import {useNavigate, useParams} from 'react-router-dom'

const UserDetails = () => {
    const {name}=useParams()  // get the last part of the slug
    const navigate=useNavigate()
    const GoBackHandler=()=>{
        //navigate('/user')     or
        navigate(-1) // go to previous url
    }
    return (
        <div className=' mt-10'>
            <h1 className="text-4xl text-red-300 mb-2">User Detail</h1>
            <h1 className='text-2xl mt-3'>Hi!!, {name}</h1>
            <button onClick={GoBackHandler} className='p-3 bg-green-300 text-white px-3 py-2'>Go Back</button>
        </div>
    );
}

export default UserDetails;
