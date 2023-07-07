import React from 'react'
import {technologies} from '../constants'
import BallCanvas from './canvas/Ball'
import { styles } from '../style'

const Tech = () => {
  return (
    <section className={`${styles.paddingX} h-screen py-20 `} id='teck'>
      <h2 className="text-[52px] font-bold text-center text-org"> Technologies &#x2f;&gt; </h2>
      <h3 className='font-[roboto] text-[20px] font-[600] text-center'>WHAT I HAVE LEARNED SO FAR</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10 w-full md:w-[70%] m-auto mt-20 md:mt-32'>
        {technologies.map((technology)=>(
          <div className='w-20 h-20 md:w-28 md:h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tech