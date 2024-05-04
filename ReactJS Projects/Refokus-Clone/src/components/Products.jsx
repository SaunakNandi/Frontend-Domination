import React from 'react'
import Product from './Product'

const Products = () => {
    var products=[
        {
            title:"Arqitel", 
            description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true,
            case_study:false,
        },
        {
            title:"Cula", 
            description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live:true,
            case_study:false,
        },
        {
            title:"Layout Hand",
            description:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live:true,
            case_study:false,
        },
        {
            title:"Yahoo!",
            description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live:true,
            case_study:true,
        }
    ]
  return (
    <div>
        {products.map((item,idx)=>(
            <Product values={item} key={idx}/>
        ))}
    </div>
  )
}

export default Products