import Hero from "./components/Hero";
import './App.css';
import About from "./components/About";
import Features from "./components/Features";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="page-settings">
      <div className="selection">
        <div className="fixed-background"></div>
        <div className="absolute-background"></div>
      </div>
      <div className="container">
        <Hero />
        <About/>
        <Features />
        <Partners />
        <Contact />
      </div>
    </div>
  );
}

export default App;
