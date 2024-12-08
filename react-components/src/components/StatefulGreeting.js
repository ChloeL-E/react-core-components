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

/* component has a construvtor which sets the state of the class

import React from "react";

class StatefulGreeting extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }


    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;
*/