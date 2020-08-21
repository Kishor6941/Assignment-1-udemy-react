import React, { Component } from "react";
import UserInputs from "./Inputs/UserInputs";
import UserOutput from "./Inputs/UserOutput";
export default class App extends Component {
  //// ----Assignment 1------------------------------------------------------------------------------------------------------
  state = {
    username: "Rajveer",
    userInput: " ",
  };
  usernameChangedHander = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  //// ----Assignment 1------------------------------------------------------------------------------------------------------

  render() {
    return (
      //// ----Assignment 1------------------------------------------------------------------------------------------------------
      <div>
        <UserInputs
          changed={this.usernameChangedHander}
          currentUserName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Kishor" />
        <UserOutput userName="Sunil" />
      </div>
    );
  }
}
