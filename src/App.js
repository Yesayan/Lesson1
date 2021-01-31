import logo from './logo.svg';
import './App.css';
import Name from "./Components/Name";
import Surname from "./Components/Surname";
import Age from "./Components/Age.js";


function App() {
  return (
    <div className="App">
      <Name />
      <Surname />
      <Age />
    </div>
  );
}

export default App;
