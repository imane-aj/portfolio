import { Fragment } from "react"

import Tech from "./components/Tech";
import Hero from "./components/Hero";
import About from './components/About';
import Works from './components/Works';
import { Contact, StarsCanvas } from "./components";
import { Footer } from "./components/Footer";


const App = ()=> {

  return (
    <Fragment>
      <Hero />
      <About/>
      <div className="relative z-0">
        <Tech/>
        <Works/>
        <Contact/>
        <Footer />
        <StarsCanvas/>
      </div>
    </Fragment>
  )
}

export default App
