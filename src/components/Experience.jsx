/* eslint-disable react/prop-types */
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences,experienceSection } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement 
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '5px solid #ffffff'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg,}}
    icon={
      <div className='flex justify-center items-center
            w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className='w-[80%] h-[80%] object-contain rounded-full'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[17px] font-bold'>
        {experience.title}
      </h3>
      <p className='text-secondary text-[15px] font-semibold '
        style={{margin: "0px"}}>
        {experience.company_name}
      </p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experience.points.map((item, index)=>(
            <li key={`experience-point-${index}`}
              className={`ext-white-100 text-[13px] pl-0 
                tracking-wide ${index==0?"font-extralight":""}`}
            >
              {item}
            </li>
          ))
        }

      </ul>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
      <p className={`${styles.sectionSubText}`}>
        {experienceSection.head}
      </p>
      <h2 className={`${styles.sectionHeadText}`}>
        {experienceSection.experince}
      </h2>
    </motion.div>

    <div className='mt-5 flex flex-col'>
      <VerticalTimeline>
        {
            experiences.map((experience, index)=>(
              <ExperienceCard key={index} experience={experience} />
            ))
        } 
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work");