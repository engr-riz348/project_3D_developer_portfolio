import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Skills = () => {
  return (
    <section id="skills">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Skills</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology, index) => (
          <motion.div
            key={`${technology.name}-${index}`}
            variants={fadeIn("right", "spring", index * 0.1, 0.75)}
            className='w-28 h-28'
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
          >
            <BallCanvas icon={technology.icon} />
            <div className='flex justify-center mt-4'>
              <p className='text-white text-xs text-center'>{technology.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
