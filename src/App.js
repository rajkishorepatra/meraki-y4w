import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Support from './Components/Support';
import Startups from './Components/Startups';

function App() {
  return (
    <div className='scroll-smooth'>
    <NavBar/>
    <Hero/>
    <About/>
    <Support/>
    <Startups/>
    </div>
  );
}

export default App;
