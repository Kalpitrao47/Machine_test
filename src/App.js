import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import GradientAbout from './Components/GradientAbout';
import SocialLogo from './Components/SocialLogo';
import TopProfile from './Components/TopProfile';
import AboutUs from './Components/AboutUs';
import Plan from './Components/Plan';

function App() {
  return (
    <div className="App">
      <Header/>
      <GradientAbout/>
      <SocialLogo/>
      <TopProfile/>
      <AboutUs/>
      <Plan/>
      
    </div>
  );
}

export default App;
