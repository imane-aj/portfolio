import React from 'react';
import { styles } from '../style';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { carrent, github, wplion } from '../assets';
import { projects } from '../constants';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#14120feb] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] '>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <section className={`${styles.paddingX} bg-[#fffaf3] py-20`} id='works'>
      <div className={`mb-9`}>
        <h3 className='font-[roboto] text-[20px] font-[600] text-black'>MY WORK</h3>
        <h2 className="text-[52px] font-bold text-org"> Projects &#x2f;&gt; </h2>
        <p className='mt-3 text-[17px] max-w-2xl leading-[30px] text-black text-justify'>
          My portfolio comprises a collection of projects that showcase my skills and experience through real-world examples. 
          Each project is accompanied by a brief description, as well as links to code repositories. These projects provide tangible evidence of my ability to tackle complex problems, work with various technologies, and effectively manage projects.
        </p>
      </div>
      <div className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          Autoplay={{
            delay: 3000, // Adjust the delay (in milliseconds) between slides
            disableOnInteraction: false, // Allow autoplay to continue even when interacting with slides
          }}
          className="swiper_container"
        >
         {projects.map((project, index) => (
            <SwiperSlide>
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            </SwiperSlide>
          ))}
       
        </Swiper>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Works;
