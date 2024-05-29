// https://www.youtube.com/watch?v=UbLYdbOPLe8

import React, { Component } from 'react'
import Counter from './Counter'
export default class App extends Component {

  // can be used to initialized a variable before the page loads
  constructor()
  {
    super()
    this.state = {
      count:0
    }
  }

  componentDidMount(){
    console.log("Component mounted")
  }
  increment(){
    return(
      this.setState({
        count:this.state.count+1
      })
    )
  }

  // The return statement return jsx which can't be understand by the browser so it needs a transpler to convert the jsx such that the browser can understand. Here render() ['also lifecycle method'] is the transpiler
  render() {
    return (
      <div>
        <Counter number={this.state.count}></Counter>
        <button onClick={()=>this.increment()}>Click</button>
      </div>
    )
  }
}
