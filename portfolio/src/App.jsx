import { Fragment } from "react"
import { styles } from "./style"
import Navbar from './components/Navbar';
import { motion } from "framer-motion";
import Tech from "./components/Tech";


const App = ()=> {

  return (
    <Fragment>
      <div>
        <section className="hero relative">
          {/* <Navbar /> */}
          <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl flex flex-row items-start grap-5`}>
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#e24f01]" />
              <div className="w-1 sm:h-80 h-40 orange-gradient" />
              </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#e24f01]">Imane</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100 sm:text-centre w-full md:w-[69%]`}>
              Welcome to my personal website! I'm a passionate full stack web developer with a focus on backend technologies. Here, I showcase the projects I've been working on.
              <br/><br/>
              I have hands-on experience with the following technologies:
              </p>
              <br></br>
              <Tech />
            </div>
          </div>
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] ml-[10em] rounded-3xl border-4 border-secondary fles justify-center items-start p-2">
                <motion.div 
                  animate = {{
                    y: [0,24,0]
                  }}
                  transition = {{
                    duration: 1.5,
                    repeat:Infinity,
                    repeatType:'loop'
                  }}
                  className = 'w-3 h-3 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
        </section>
        <div id='about'>
          <img src={'/src/assets/imané (1).png'}/>
        </div>
      </div>
    </Fragment>
  )
}

export default App
