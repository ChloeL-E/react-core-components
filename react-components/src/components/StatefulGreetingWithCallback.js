import React from "react";

class StatefulGreetingWithCallback extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        introduction: "Hello!",
        buttonText: "Exit",
      };
    }
  
    handleClick() {
      this.setState({
        introduction: "Goodbye!",
        buttonText: "Enter"
      }, ()=>{  // passing a callback function to the setState method
          console.log('new state', this.state.introduction); // these values will be logged after the setState function is run so will be the updated values
          console.log('new state', this.state.buttonText);  // so the values logged here will be the new values "Goodbye!", "Enter"
      });
      console.log(this.state.introduction); // these logs run outside the callback function above, this code will run before setState completes
      console.log(this.state.buttonText);  // so the logs her will be "Hello!" , "Exit"
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
        </div>
      );
    }
  }
  
  export default StatefulGreetingWithCallback;