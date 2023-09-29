import React from 'react'
import { styles } from "../style"
import { motion } from "framer-motion";
import Navbar from './Navbar';
import { data } from '../assets';

const Hero = () => {
  return (
    <section className="hero relative h-screen md:h-[60vh] lg:h-screen">
      <Navbar />
      <div className="w-full h-full absolute z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={data} type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.paddingX} absolute inset-0 top-[300px] lg:top-[230px] max-w-7xl flex flex-row items-start grap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#e24f01]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
          </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#e24f01]">Imane</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100  w-full md:w-[69%]`}>
          Welcome to my personal website! I'm a passionate full stack web developer with a focus on backend technologies. Here, I showcase the projects I've been working on.
          </p>
          <br/><br/>
          <div>
            <a href="https://www.linkedin.com/in/imane-ajroudi-253b31206/" target="_blank" className="border rounded-full py-3 px-4 mr-5 border-[#e24f01] bg-[#e24f01] hover:bg-transparent transition duration-300"><i className="text-lg fa-brands fa-linkedin-in motion-safe:animate-spin"></i></a>
            <a href="https://github.com/imane-aj" target="_blank" className="border rounded-full py-3 px-4 mr-5 border-[#e24f01] hover:bg-[#e24f01] transition duration-300"><i className="fa-brands fa-github text-lg"></i></a>
            <a href="mailto:ajroudi.im@gmail.com" className="border rounded-full py-3 px-4 mr-5 border-[#e24f01] hover:bg-[#e24f01] transition duration-300"><i className="fa-solid fa-at text-lg"></i></a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary fles justify-center items-start p-2">
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
  )
}

export default Hero