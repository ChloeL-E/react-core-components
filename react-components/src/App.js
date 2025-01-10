import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting name="John" />
      <StatefulGreeting name="Anna" />
      <HooksCounter name="Mike" /> 
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
