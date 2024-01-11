import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import GradientAbout from './Components/GradientAbout';
import SocialLogo from './Components/SocialLogo';
import TopProfile from './Components/TopProfile';

function App() {
  return (
    <div className="App">
      <Header/>
      <GradientAbout/>
      <SocialLogo/>
      <TopProfile/>
    </div>
  );
}

export default App;
