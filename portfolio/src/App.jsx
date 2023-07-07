import { Fragment } from "react"

import Tech from "./components/Tech";
import Hero from "./components/Hero";
import About from './components/About';
import Works from './components/Works';
import { Contact, StarsCanvas } from "./components";


const App = ()=> {

  return (
    <Fragment>
      <Hero />
      <About/>
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </Fragment>
  )
}

export default App
