import React, { Component } from "react";

export default class UserClass extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default"
            }
        }
    }

    async componentDidMount()
    {
        const data=await fetch('https://api.github.com/users/akshaymarch7')
        const json=await data.json()
        
        this.setState({userInfo:json})
    }

    render(){
        const {name,location}=this.state.userInfo
        return (
            <div>
                <h1>Welcome, {name}</h1>
                <h3>You are from {location}.</h3>
            </div>
        )
    }
}