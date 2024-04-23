import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Solutions from './components/OurSolutions/Solutions';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <ChooseUs />
      <Solutions />
    </div>
  );
}
export default App;
