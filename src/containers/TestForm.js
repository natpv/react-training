import React from "react";
class TestForm extends React.Component {
  state = { name: "", email: "" };
  // reference : document.getElementById
  emailRef = null;
  saveData(e) {
    e.preventDefault();
    console.log("Form submitted", this.state, this.emailRef.value);
  }
  render() {
    return (
      <form onSubmit={(e) => this.saveData(e)}>
        <label>Name</label>
        {/* CONTROLLED COMPONENT */}
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        {this.state.name === "" ? <small>Name is required</small> : null}
        <label>Email</label>
        {/* UNCONTROLLED COMPONENT */}
        <input
          type="email"
          ref={(r) => (this.emailRef = r)}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        {this.state.email === "" ? <small>Email is required</small> : null}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TestForm;
