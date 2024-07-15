import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    debugger;
    return (
      <div>
        <h1>Welcome, {name}</h1>
        <img src={avatar_url} alt="" />
        <h3>You are from {location}.</h3>
      </div>
    );
  }
}
