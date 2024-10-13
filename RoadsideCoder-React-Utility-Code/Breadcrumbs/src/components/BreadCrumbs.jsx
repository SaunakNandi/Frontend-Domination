import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumbs() {
    const {pathname}=useLocation()
    const pathArray=pathname.split('/').filter(x=> x!="")
    // console.log(pathArray)
    let breadcrumbPath=''
  return (
    <div>
        <div className="breadcrumbs">
            {
                pathArray.length===0? <></>:<Link to="/">Home </Link>
            }
            {
                pathArray.map((name,i)=>{

                    breadcrumbPath+=`/${name}`
                    const isLast= i===pathArray.length-1
                    return (
                        isLast? <span key={i}>/ {name}</span>:(
                            <span>
                                <Link to={breadcrumbPath} key={i}>/ {name}</Link>
                            </span>
                            )
                        
                    )
                }
                )
            }
        </div>
    </div>
  )
}
