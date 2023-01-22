import React, { Component } from "react";
import { Div } from "./BurgerStyle";
import Navbar from "../Navbar";

class Burger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  clickHandler = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <>
        <Div open={this.state.open} onClick={this.clickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Navbar open={this.state.open} />
      </>
    );
  }
}
export default Burger;
