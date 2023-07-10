import React from 'react'
import {technologies} from '../constants'
import BallCanvas from './canvas/Ball'
import { styles } from '../style'
import { developer } from '../assets'

const Tech = () => {
  return (
    <section className={`${styles.paddingX} py-16 bg-[#fffaf3] flex flex-col-reverse md:flex-row md:justify-between `} id='teck'>
      <div className='md:w-[60%] relative text-black m-auto text-justify'>
        <h3 className='font-[roboto] text-[20px] font-[600] text-black'>WHAT I HAVE LEARNED SO FAR</h3>
        <h2 className="text-[52px] font-bold text-org"> Technologies &#x2f;&gt; </h2>
        <p className='mt-3 mb-3 text-lightBroun'>As a developer, I have experience and proficiency in various technologies. However, I'm not limited to only those technologies I currently know. I have a growth mindset and I'm open to learning and exploring new technologies.</p>
        <p className='mb-3 text-lightBroun'>I embrace the opportunity to expand my skill set and adapt to emerging technologies quickly. I believe in continuous learning and staying up-to-date with the latest advancements in the field.</p>
        <div className='flex flex-row md:justify-between'>
          <ul>
            <h6 className='font-mono text-xl mb-3 orange-text-gradient'>Back-End</h6>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> NodeJs &nbsp;<i className="fa-solid fa-spinner animate-spin blue-text-gradient"></i></span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> MongoDB &nbsp;<i className="fa-solid fa-spinner animate-spin blue-text-gradient"></i></span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline" ></ion-icon><span className='black-gradient'> Laravel</span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> MySQL </span></li>
            <li ><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> PHP</span></li>
            <li ><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> API</span></li>
          </ul>
          <ul>
            <h6 className='font-mono text-xl mb-3 green-text-gradient'>Front-End</h6>
            <li className='mb-2'><ion-icon name="caret-back-outline" ></ion-icon><span className='black-gradient'> ReactJs #redux</span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline" className='animate-spin' ></ion-icon><span className='black-gradient'> Angular  
              &nbsp;<i className="fa-solid fa-spinner animate-spin blue-text-gradient"></i></span>
            </li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> Javascript </span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> Tailwind Css </span></li>
            <li ><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> Html #Css #Bootstrap</span></li>
          </ul>
          <ul>
            <h6 className='font-mono text-xl mb-3 green-pink-gradient'>Others</h6>
            <li className='mb-2'><ion-icon name="caret-back-outline" ></ion-icon><span className='black-gradient'> Git #Github</span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> Scrum </span></li>
            <li className='mb-2'><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> Figma #Canva </span></li>
            <li ><ion-icon name="caret-back-outline"></ion-icon><span className='black-gradient'> Trello</span></li>
          </ul>
        </div>
        <p><i className="fa-solid fa-spinner animate-spin blue-text-gradient mt-6"></i><span className='blue-text-gradient'> Technologies that I am currently learning.</span></p>
      </div>
      <div className='md:w-[50%] m-auto'>
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