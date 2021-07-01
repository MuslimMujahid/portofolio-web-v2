import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Element name="HeroSection"><Hero/></Element>
      <Element name="AboutSection"><About/></Element>
      <Element name="ProjectsSection"><Projects/></Element>
      <Element name="ContactSection"><Contact/></Element>
    </div>
  );
}

export default App;
