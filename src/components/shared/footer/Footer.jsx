import { motion } from "framer-motion"
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";


const Footer = () => {

  const socials = [
    {
      name: "LinkedIn",
      logo: <LuLinkedin className="w-6 h-6	" />,
      href: "https://www.linkedin.com/in/rudransh-aggarwal-33653a1b6/"
    },
    {
      name: "Github",
      logo: <LuGithub className="w-6 h-6	" />,
      href: "https://github.com/rudrcodes"
    },
    {
      name: "Leetcode",
      logo: <SiLeetcode className="w-6 h-6	" />,
      href: "https://leetcode.com/rudrcodes/"
    },
    {
      name: "Coding Ninjas",
      logo: <SiCodingninjas className="w-6 h-6	" />,
      href: "https://www.codingninjas.com/studio/profile/rudrcodes"
    },

  ];

  // socials ko backend se fetch krun?

  const hoverScaleAnimation={
    rest:{
      scale:1
    },
    hover:{
      scale:1.2
    },
    transition:{
      type:"easeIn",
      duration:0.4
    }
  }

  return (
    // <motion.div className="max-h-[100px] bg-red-400 py-3.5 px-10 flex justify-between items-center w-screen">
    <motion.div className="max-h-[140px]   bg-[#F9F4F5]  border-t-4  py-3.5 px-10 flex justify-between items-center w-screen rounded-t-3xl">

  <div className="text-[16px] text-black "><span className="text-bold">&copy; 2024 </span>|<span className="text-bold"> Rudransh Aggarwal</span></div>

      <div className=" flex justify-center items-center gap-7 ">
        {socials.map((social) => {
          return (
            <motion.a 
            initial="rest"
            animate="rest"
            whileHover="hover"
            variants={hoverScaleAnimation}            
            
            href={social.href} key={social.name} target="_blank" >
              {social.logo}
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Footer