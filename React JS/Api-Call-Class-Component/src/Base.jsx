import React, { Component } from 'react'
import UserClass from './UserClass'

class Base extends Component{
    constructor()
    {
        super()
        console.log("Parent constructor")
    }
    
    componentDidMount(){
        console.log("Parent componentDidMount")
    }

    render(){
        console.log("Parent render")
        return(
            <div>
                <p>Parent Component</p>
                <UserClass name={"Sherry"} location={'India'}/>
                {/* <UserClass name={"Shimo"} location={'Nepal'}/> */}
            </div>
        )
    }
}
export default Base