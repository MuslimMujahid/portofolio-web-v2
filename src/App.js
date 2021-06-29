import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Projects/>
      <Contact/> */}
    </div>
  );
}

export default App;
