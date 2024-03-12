import { motion } from 'framer-motion'

import html from "../../assets/skills/html.png"
import react from "../../assets/skills/reactJS.png"
import ts from "../../assets/skills/ts.png"
import js from "../../assets/skills/js.png"
import NextJS from "../../assets/skills/NextJS.png"
import bootstrap from "../../assets/skills/bootstrap.png"
import css from "../../assets/skills/css.png"
import Express from "../../assets/skills/Express.png"
import mongodb from "../../assets/skills/mongodb.png"
import MySQL from "../../assets/skills/MySQL.png"
import Nodejs from "../../assets/skills/Nodejs.png"
import RTK from "../../assets/skills/RTK.png"
import SQL from "../../assets/skills/SQL.png"

const SkillsTab = () => {

  const onHoverAnimation = {
    rest: {
      scale: 1
    },
    hover: {
      scale: 1.1,
      transition: {
        // type: 'easeInOut',
        // ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.35
      }
    }
  }
  return (
    <motion.div
      className='flex justify-start  items-start text-white font-bold w-full h-ful  flex-col text-start md:ml-2  md:px-5 md:py-2 px-3 py-2  my-5  text-xl md:text-3xl border-l-2 rounded-sm border-gray-200'
    >
      <h1>Skills : </h1>

      <motion.div
        className='flex justify-start md:justify-start items-center gap-5 w-full mt-4 flex-wrap'

      >
        <motion.img
          whileHover="hover"
          whileTap="hover"
          animate="rest"
          initial="rest"
          variants={onHoverAnimation}

          className='w-8 lg:w-16 bg-white rounded-md p-1' src={html} alt='html' />


        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-md' src={react} alt='react' />

        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-md' src={RTK} alt='react' />

        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:h-16 lg:w-16 rounded-md' src={SQL} alt='react' />

        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-md' src={Nodejs} alt='react' />


        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:h-14 lg:w-20 rounded-md' src={MySQL} alt='react' />


        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-md' src={mongodb} alt='react' />

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

        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-md' src={bootstrap} alt='js' />

        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 rounded-xs' src={Express} alt='js' />

          
        <motion.img whileHover="hover"
          animate="rest"
          whileTap="hover"
          initial="rest"
          variants={onHoverAnimation} className='w-8 lg:w-16 bg-red-100 rounded-full p-1' src={css} alt='js' />


      </motion.div>



    </motion.div >
  )
}

export default SkillsTab