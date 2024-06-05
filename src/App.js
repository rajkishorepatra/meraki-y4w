import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Support from "./Components/Support";
import Startups from "./Components/Startups";
import Impact from "./Components/Impact";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Hero />
      <About />
      {/* <Support /> */}
      {/* <Startups /> */}
      {/* <Impact/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
