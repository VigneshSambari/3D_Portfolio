import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full h-screen relative mx-auto">
        <div className={`${styles.paddingHeader} absolute inset-0 gap-5
            top-[60px] items-start max-w-7xl mx-auto flex flex-row`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-4 h-4 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-55  h-40 violet-gradient" />  
          </div>
          <div>
          <h1 className={`${styles.heroHeadText} text-white max-w-[450px]`}>
              Hi, I'm &nbsp; <span className="text-[#915eff]">Sambari Vignesh</span>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I am a web developer, app developer and ML engineer, and I also make 
                3D models in blender.
              </p>
            </h1>
          </div>
         
        </div>
        <ComputersCanvas />

        <div className="absolute xs:bottom-5 bottom-10 w-full flex
              justify-center items-center">
          <a href="#about">
            <div className="w-[20px] h-[40px] rounded-3xl border-2
                  justify-center items-start p-1 flex">
               <motion.dev 
                animate={{
                  y: [0,20,0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-2 rounded-full bg-secondary"
                />       
            </div>
          </a>

        </div>
    </section>
  )
}

export default Hero