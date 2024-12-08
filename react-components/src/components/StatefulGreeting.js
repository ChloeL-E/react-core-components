import React from "react";

export default class StatefulGreeting extends React.Component {
  constructor(props) {
    super(props);  //a constructor must always take on this form. Best practice to use super and pass props into component and super
    this.state = {  //define a state object for class
      count: 0  //give the initial state some values
    };
  }

  setCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <div className="greeting">
        <h1>
          Hello, {this.props.name}, I'm a stateful component!
        </h1>
        <h2>You've clicked {this.state.count} times</h2>
        <button onClick={this.setCount}>Increment Count</button>  
      </div>
    );
  }
}