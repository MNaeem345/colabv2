import './App.css';
import Navbarr from './components/Navbarr';
import Title from './components/Title';
import Projects from './components/Projects';
import About from './components/About';
import PokemonBattle from './components/Pokemon';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';





function App() {
  return (
    <div className='App'>
      <Navbarr/>
      <Title/>
      <About/>
      <Projects/>
      <PokemonBattle/>
      <Footer/>
    </div>
    
  );
}

export default App;
