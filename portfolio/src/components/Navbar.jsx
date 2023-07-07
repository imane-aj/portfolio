import React, { useEffect, useState } from 'react'
import { close, logo, menu } from '../assets'
import { styles } from '../style'

const Navbar = () => {
  const [open, setOpen] = useState('false')

  // const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <nav className={`${styles.paddingX} pt-5 pb-5 absolute top-8 md:top-11 left-0 w-full`}>
      <div className=' md:flex md:justify-between '>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <img src={logo} className='h-12 cursor-pointer object-contain' onClick={()=>{window.scrollTo(0,0)}}/>
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>Imane Ajroudi &nbsp;<span className='sm:block hidden'>| Laravel & ReactJs</span></p>
          </div>
          <img src={open? close : menu} className='w-[28px] cursor-pointer block md:hidden' onClick={()=>setOpen(!open)}/>
        </div>
        
        <ul className={`md:flex md:items-center mt-4 md:mt-0 z-[-1] md:z-auto md:static absolute bg-gradient-to-r from-org md:bg-transparent md:from-inherit w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all duration-500 ease-in
        ${open? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100`}>
          <li className='ml-[-10px] md:mx-4 hover:text-org duration-300 cursor-pointer mb-3 md:mb-0 text-[18px] font-bold'><span className='text-org opacity-0 md:opacity-100'>02.</span> About</li>
          <li className='ml-[-10px] md:mx-4 hover:text-org duration-300 cursor-pointer mb-3 md:mb-0 text-[18px] font-bold'><span className='text-org opacity-0 md:opacity-100'>03.</span> Technologies</li>
          <li className='ml-[-10px] md:mx-4 hover:text-org duration-300 cursor-pointer mb-3 md:mb-0 text-[18px] font-bold'><span className='text-org opacity-0 md:opacity-100'>04.</span> Contact</li>
          {/* <button className='border rounded-lg border-org py-1 pl-6 pr-14 ml-0 md:ml-9 relative hover:bg-org transition duration-500 text-[18px] font-bold'>Hire me
            <span className='absolute top-[9px] right-6'>
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-org hover:bg-white"></span>
              </span>
            </span>
          </button> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar