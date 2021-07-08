import React, { Component, PureComponent } from "react";
class Demo extends Component {
  state = { count: 0, location: "mumbai" };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("SHOULD COMPONENT UPDATE CALLED", nextProps, nextState);
    // return boolean;
    return this.state.location !== nextState.location || nextState.count === 6;
  }


  render() {
    console.log("RENDER CALLED", this.state);
    const name = "mike";
    // return something always
    // jsx
    return (
      <div>
        <p>{name}</p>
        <p>{name.toUpperCase()}</p>
        <p>{8 + 7}</p>
        <p>Count : {this.state.count}</p>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Increment
        </button>
        <button onClick={() => this.setState({ location: "bangalore" })}>
          Change to Bangalore
        </button>
        <button onClick={() => this.setState({ location: "mumbai" })}>
          Change to Mumbai
        </button>
      </div>
    );
  }
}
export default Demo;
