import React from 'react'
import { styles } from '../style'

const About = () => {
  return (
    <section id='about' className={`${styles.paddingX} h-screen bg-[#fffaf3] flex justify-between`}>
      <div className='md:w-[50%]'></div>
      <div className="md:w-[60%] relative text-black m-auto text-justify">
        <h2 className="text-[52px] font-bold text-org"> About Me &#x2f;&gt; </h2>
        <h3 className='font-[roboto] text-[20px] font-[600]'>LANGUAGE IS TEMPORARY, LOGIC IS PERMANENT ... 
          <span className='block text-org text-sm'>#coding &nbsp; #userSatisfaction</span></h3>
        <p className='mt-3 mb-3 text-lightBroun'>A dedicated full stack web developer with a strong passion for creating dynamic and innovative digital solutions. I have honed my skills in both Frontend and Backend development.</p>

        <p className='mb-3 text-lightBroun'>My journey in web development began with a fascination for backend technologies, which eventually led me to become a full stack developer. I specialize in utilizing frameworks such as Laravel, along with frontend technologies like React.js, to build robust and user-friendly web applications.</p>

        <p className='mb-3 text-lightBroun'>As a detail-oriented developer, I prioritize clean code, efficient algorithms, and seamless user experiences. I believe in constantly improving my skills and staying up-to-date with the latest industry practices. </p>
        <p className='mb-3 text-lightBroun'>On this website, I showcase a collection of the projects I have worked on, highlighting the diverse range of my capabilities as a full stack web developer.</p>
        <p className='mb-3 text-lightBroun'>Thank you for visiting my personal website. Feel free to explore my portfolio and get in touch if you have any questions or potential collaborations. I look forward to connecting with you!".</p>
      </div>
    </section>
  )
}

export default About