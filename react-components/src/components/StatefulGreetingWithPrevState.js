import React from "react";

class StatefulGreetingWithCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
      count: 0,
    };
  }

  handleClick() {
    this.setState((prevState, prevProps) => {  //set state recieives a function rather than an object with access to prevState and prevProps- ensures state update is calculated using the most recent state
      console.log("Previous State:", prevState);  // logs most recent state and props
      console.log("Previous Props:", prevProps);
      return {  // return the new state based on the previous state
        introduction:
          prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",   // returns toggle between goodbye and hello
        buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",  // returns toggle between Exit and enter
      };
    });
  }

  increment() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State:", prevState);
      console.log("Previous Props:", prevProps);
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
        <button onClick={() => this.increment()}>
          Increment
        </button>
        <p> You have clicked {this.state.count} times</p>
      </div>
    );
  }
}

export default StatefulGreetingWithCallback;