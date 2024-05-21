import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from '../store/actions/personActions'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import HorizontalCards from './partials/HorizontalCards'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const PersonDetails = () => {
  const {pathname} =useLocation()
  const navigate=useNavigate()
  const {id}=useParams()
  const {info}=useSelector(state=>state.person)
  const dispatch=useDispatch();
  const [show,setShow]=useState(true)
  console.log(pathname)
  useEffect(()=>{
    dispatch(asyncloadperson(id))

    // unmounting the data for clean up
    return ()=>{
      dispatch(removeperson())
    }
  },[id])
  return info?(
    <div>PersonDetails</div>
  ):<Loading />
}

export default PersonDetails