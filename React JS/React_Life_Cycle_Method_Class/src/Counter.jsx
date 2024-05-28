import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate')
        // console.log(prevProps)
        // console.log(prevState)
        if(prevProps.number!==this.props.number) {
            alert('Number has been changed')
        }
    }

    componentWillUnmount()
    {
        console.log("Component Removed : Component Removed")
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
