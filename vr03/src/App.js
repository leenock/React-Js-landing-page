import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Solutions from './components/OurSolutions/Solutions';
import Stats from './components/stats/Stats';
import Project from './components/Projects/Project';
import Cta from './components/CTA/Cta';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <ChooseUs />
      <Solutions />
      <Stats />
      <Project />
      <Cta />
      <Footer />
    </div>
  );
}
export default App;
