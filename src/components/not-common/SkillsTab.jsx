import { motion } from 'framer-motion'
import html from "../../assets/skills/html.png"
import react from "../../assets/skills/reactJS.png"
import ts from "../../assets/skills/ts.png"
import js from "../../assets/skills/js.png"
import NextJS from "../../assets/skills/NextJS.png"

const SkillsTab = () => {

  const onHoverAnimation = {
    rest: {
      scale: 1
    },
    hover: {
      scale: 1.15,
      transition: {
        // type: 'easeInOut',
        // ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.35
      }
    }
  }
  // const skills = ["/skills/htmlIcon.png"];
  return (
    <motion.div
      className='flex justify-center items-start text-white font-bold w-full h-full flex-col text-start p-5 md:border-l-4 rounded-sm md:border-gray-200 my-5'
    >
      <h1 className='text-5xl font-bold'>SkillsTab</h1>
      {/* {skills.map((skill) => { */}
      {/* return <img src={skill} alt='logo' key={skill} />;
      })} */}
      <motion.div
        className='flex justify-center md:justify-start items-center gap-5 w-full mt-4'

      >
        {/* <motion.div className='bg-red-900 rounded-full'> */}
        <motion.img
          whileHover="hover"
          whileTap="hover"
          animate="rest"
          initial="rest"
          variants={onHoverAnimation}

          className='w-8 lg:w-16 bg-red-100 rounded-full p-1' src={html} alt='html' />
        {/* </motion.div> */}
        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-md' src={react} alt='react' />
        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-md' src={ts} alt='ts' />
        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 ' src={NextJS} alt='NextJS' />
        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-md' src={js} alt='js' />
      </motion.div>



    </motion.div >
  )
}

export default SkillsTab