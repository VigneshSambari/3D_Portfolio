/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

import { SectionWrapper } from "../hoc"
import { projects, workSection } from "../constants"
import { github,imageIcon } from "../assets"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"

const RoundedLinkButton = ({source_code_link, iconData, alt_code}) => {
  return (
    <div className="black-gradient w-7 h-7 rounded-full flex
                  justify-center items-center cursor-pointer"
                  onClick={() => window.open(source_code_link, "_blank")}
            >
               <img
                  src={iconData}
                  alt={alt_code}
                  className='w-4/5 h-4/5 object-contain'
                />
            </div>
  )
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-start m-1 
                          flex-col gap-1 items-end'>
          <RoundedLinkButton source_code_link={demo} 
                               iconData={imageIcon}
                               alt_code={"demo"}
            />
            <RoundedLinkButton source_code_link={source_code_link} 
                               iconData={github}
                               alt_code={"github"}
            />
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[22px]'>{name}</h3>
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
    <>
      <motion.div
        variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          {workSection.head}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          {workSection.projects}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
            variants={fadeIn("","",0.1,1)}
            className="mt-3 text-secondary text-[15px] 
                max-w-3xl leading-[25px]">
              {workSection.desc}      
        </motion.p>
        </div>
        <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}


export default SectionWrapper(Works, "");