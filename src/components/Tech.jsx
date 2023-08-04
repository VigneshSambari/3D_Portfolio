import { BallCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { technologySection } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-col justify-start'>
      <motion.div
      variants={textVariant()}
      >
      <p className={`${styles.sectionSubText}`}>
        {technologySection.head}
      </p>
      <h2 className={`${styles.sectionHeadText}`}>
        {technologySection.tech}
      </h2>
    </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {
          technologies.map((tech) => (
            <div key={tech.name} className='w-20 h-20'>
              <BallCanvas icon={tech.icon}/>
              <div className='text-white font-mono text-center text-[13px]'>
                {tech.name}
              </div>
            </div>
          ))
        }

      </div>
    </div>
    
  )
}

export default SectionWrapper(Tech, "tech");