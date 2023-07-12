import React from 'react'
import { styles } from '../style';

export const Footer = () => {
  return (
    <footer className={`${styles.paddingX}`}>
        <div className='border-t flex flex-col text-center md:flex-row md:justify-between py-5 border-[#14120f]'>
            <p className='black-gradient'>
                <i className='fas fa-anchor orange-text-gradient text-2xl'></i>
                <span className='ml-2'>Thanks for scrolling all the way down here!</span>
            </p>
           <p className='black-gradient pt-[5px]'>
                Designed & Built by Imane Ajroudi
           </p>
        </div>
    </footer>
  )
}
