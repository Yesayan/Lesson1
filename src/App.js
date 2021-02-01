import './App.css';
// import logo from './logo.svg';
// import Name from "./Components/Name";
// import Surname from "./Components/Surname";
// import Age from "./Components/Age.js";
import Card from './Components/Card';


function App() {
  const card1 = {
      title: 'Card1 Title',
      imgUrl: 'https://onex.am/img/svg/step1.svg',
      imgAlt: 'Register and take address for free',
      text: 'Card1 description'
  };
  const card2 = {
    title: 'Card2 Title',
    imgUrl: 'https://onex.am/img/svg/step2.svg',
    imgAlt: 'Use given address for shopping',
    text: 'Card2 description'
};
const card3 = {
  title: 'Card3 Title',
  imgUrl: 'https://onex.am/img/svg/step3.svg',
  imgAlt: 'Take your packages from all cities in Armenia and Artsakh',
  text: 'Card3 description'
};

return (
  <div className = "App">
    <div className = "card_wrap">
      <Card title = {card1.title} img = {card1.imgUrl} imgAlt = {card1.imgAlt} text = {card1.text} />
      <Card title = {card2.title} img = {card2.imgUrl} imgAlt = {card2.imgAlt} text = {card2.text} />
      <Card title = {card3.title} img = {card3.imgUrl} imgAlt = {card3.imgAlt} text = {card3.text} />
    </div>
  </div>
 )
}

export default App;
