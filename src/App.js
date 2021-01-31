import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Name />
      <Surname />
      <Age />
    </div>
  );
}

function Name () {
  const name = "Ararat";
  return <p> Name : {name} </p>
}
function Surname () {
  const Surname = "Yesayan"
  return <p> Surname : {Surname}</p>
}
function Age () {
  const Age = 22;
  return (
  <p> Age : {Age + 3} </p>  
  )
}

export default App;

