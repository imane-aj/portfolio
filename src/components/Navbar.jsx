import React, { useEffect, useState } from 'react'
import { close, logo, menu } from '../assets'
import { styles } from '../style'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState('false')

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`${styles.paddingX} ${isScrolled ? 'top-0 bb-gradient py-3' : 'top-8 md:top-11 py-5'}  fixed left-0 w-full`}>
      <div className=' lg:flex lg:justify-between '>
        <div className='flex flex-row justify-between'>
          <div className='flex items-center gap-2'>
            <img src={logo} className='h-12 cursor-pointer object-contain' onClick={()=>{window.scrollTo(0,0)}}/>
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>Imane Ajroudi&nbsp;<span className='sm:block hidden'> | Developer</span></p>
          </div>
          <img src={open? menu : close} className='w-[28px] cursor-pointer block lg:hidden' onClick={()=>setOpen(!open)}/>
        </div>
        
        <ul className={`lg:flex lg:items-center mt-4 lg:mt-0 z-[-1] lg:z-auto lg:static absolute bg-gradient-to-r from-org lg:bg-transparent lg:from-inherit w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 transition-all duration-500 ease-in
        ${open? 'top-[-490px]':'top-20 opacity-100'} md:opacity-100`}>
          <li className='ml-[-10px] md:mx-4 hover:text-org duration-300 cursor-pointer mb-3 md:mb-0 text-[17px] '><Link to='about' smooth={true} duration={500} spy={true} activeClass='text-org font-bold'><span className='text-org opacity-0 md:opacity-100 font-mono'>02.</span> About</Link></li>
          <li className='ml-[-10px] md:mx-4 hover:text-org duration-300 cursor-pointer mb-3 md:mb-0 text-[17px] '><Link to='teck' smooth={true} duration={500} spy={true} activeClass='text-org font-bold'><span className='text-org opacity-0 md:opacity-100 font-mono'>03.</span> Technologies</Link></li>
          <li className='ml-[-10px] md:mx-4 hover:text-org duration-300 cursor-pointer mb-3 md:mb-0 text-[17px] '><Link to='works' smooth={true} duration={500} spy={true} activeClass='text-org font-bold'><span className='text-org opacity-0 md:opacity-100 font-mono'>04.</span> Projects</Link></li>
          <li className='ml-[-10px] md:mx-4 hover:text-org duration-300 cursor-pointer mb-3 md:mb-0 text-[17px] '><Link to='contact' smooth={true} duration={500} spy={true} activeClass='text-org font-bold'><span className='text-org opacity-0 md:opacity-100 font-mono'>04.</span> Contact</Link></li>
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