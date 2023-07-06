import React from 'react'
import {technologies} from '../constants'
import BallCanvas from './canvas/Ball'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-start mt-3'>
      {technologies.map((technology)=>(
        <div className='w-16 h-16' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default Tech