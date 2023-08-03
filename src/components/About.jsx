/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import  {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services, aboutSection} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({index, icon, title}) => {
  return (
    <Tilt  className="xs:w-[200px] w-full" >
      <motion.div
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px]
                  rounded-[10px] '>
       <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[10px] py-5 px-12 min-h-[200px]
            flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title}
            className='w-14 h-14 object-contain'/>
          <h3 className='text-white text-[15px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
   <>
    <motion.div
      variants={textVariant()}
      >
      <p className={`${styles.sectionSubText}`}>
        {aboutSection.head}
      </p>
      <h2 className={`${styles.sectionHeadText}`}>
        {aboutSection.overView}
      </h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1) }
      className='mt-3 text-secondary text-[17px] 
      max-w-3xl leading-[25px]' >
        {aboutSection.info}
    </motion.p>
    
    <div className='mt-10 flex flex-wrap gap-10'>
      {
        services.map((service, index)=>(
          <ServiceCard key={services.title} index={index} {...service} />
        ))
      }
    </div>
   </>
  )
}

export default SectionWrapper(About, "about");