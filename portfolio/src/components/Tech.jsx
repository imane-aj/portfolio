import React, { useState } from 'react'
import {technologies} from '../constants'
import BallCanvas from './canvas/Ball'
import { styles } from '../style'
import { developer } from '../assets'

const Tech = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <section className={`${styles.paddingX} ${isDarkMode? 'bg-[#fffaf3] border border-t border-b' : 'bg-transparent' } transition-all duration-500 relative py-16 flex flex-col-reverse lg:flex-row lg:justify-between `} id='teck'>
      <button onClick={handleClick} className="toggle-button absolute right-12 top-0">
            <span className={`${isDarkMode ? 'orange-text-gradient' : 'black-gradient'} hover:text-[35px] text-[25px] transition-all duration-500`}>{isDarkMode ? '☀️' : '🌙'}</span>
        </button>
      <div className='lg:w-[60%] relative m-auto md:text-justify'>
        <h3 className={`font-[roboto] text-[20px] font-[600] ${isDarkMode? 'text-black' : 'black-gradient' } transition-all duration-500`}>WHAT I HAVE LEARNED SO FAR 
        </h3>
        <h2 className="text-[52px] font-bold text-org"> Technologies 
        &#x2f;&gt; </h2>
        <p className={`mt-3 mb-3 text-lightBroun ${isDarkMode? 'text-black' : 'black-gradient' } transition-all duration-500`}>As a developer, I have experience and proficiency in various technologies. However, I'm not limited to only those technologies I currently know. I have a growth mindset and I'm open to learning and exploring new technologies.</p>
        <p className={`mb-8 text-lightBroun ${isDarkMode? 'text-black' : 'black-gradient' } transition-all duration-500`}>I embrace the opportunity to expand my skill set and adapt to emerging technologies quickly. I believe in continuous learning and staying up-to-date with the latest advancements in the field.</p>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <ul>
            <h6 className='font-mono text-xl mb-3 orange-text-gradient'>Back-End</h6>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> NodeJs &nbsp;<i className="fa-solid fa-spinner animate-spin blue-text-gradient"></i></span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> MongoDB &nbsp;<i className="fa-solid fa-spinner animate-spin blue-text-gradient"></i></span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline" ></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Laravel</span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> MySQL </span></li>
            <li ><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> PHP</span></li>
            <li ><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> API</span></li>
          </ul>
          <ul>
            <h6 className='font-mono text-xl mb-3 green-text-gradient'>Front-End</h6>
            <li className='mb-2'><ion-icon name="caret-back-outline" ></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> ReactJs #redux</span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline" className='animate-spin' ></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Angular  
              &nbsp;<i className="fa-solid fa-spinner animate-spin blue-text-gradient"></i></span>
            </li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Javascript </span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Tailwind Css </span></li>
            <li ><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Html #Css #Bootstrap</span></li>
          </ul>
          <ul>
            <h6 className='font-mono text-xl mb-3 green-pink-gradient'>Others</h6>
            <li className='mb-2'><ion-icon name="caret-back-outline" ></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Git #Github</span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Scrum </span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Figma #Canva </span></li>
            <li ><ion-icon name="caret-back-outline"></ion-icon><span className={`${isDarkMode? 'white-gradient' : 'black-gradient' } transition-all duration-500`}> Trello</span></li>
          </ul>
        </div>
        <p><i className="fa-solid fa-spinner animate-spin blue-text-gradient mt-6"></i><span className='blue-text-gradient'> Technologies that I am currently learning.</span></p>
      </div>
      <div className='lg:w-[50%] m-auto' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img src={developer} />
      </div>
      
      
      {/* <div className='flex flex-row flex-wrap md:justify-center gab-2 md:gap-9 w-full md:w-[80%] m-auto mt-20 md:mt-20'>
        {technologies.map((technology)=>(
          <div className='w-20 h-20 md:w-28 md:h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div> */}
    </section>
  )
}

export default Tech