import { motion } from "framer-motion"
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";


const Footer = () => {

  const socials = [
    {
      name: "LinkedIn",
      logo: <LuLinkedin className="w-8 h-8	" />,
      href: "https://www.linkedin.com/in/rudransh-aggarwal-33653a1b6/"
    },
    {
      name: "Github",
      logo: <LuGithub className="w-8 h-8" />,
      href: "https://github.com/rudrcodes"
    },
    {
      name: "Leetcode",
      logo: <SiLeetcode className="w-8 h-8" />,
      href: "https://leetcode.com/rudrcodes/"
    },
    {
      name: "Coding Ninjas",
      logo: <SiCodingninjas  className="w-8 h-8" />,
      href: "https://www.codingninjas.com/studio/profile/rudrcodes"
    },

  ];

  // socials ko backend se fetch krun?
  
  return (
    <motion.div className=" bg-red-400 py-3.5 px-10 flex justify-between items-center w-screen">

      <div className="text-[18px] text-black">&copy; 2024 Rudransh Aggarwal </div>

      <div className="bg-red-900 flex justify-center items-center gap-7 ">
        {socials.map((social) => {
          return (
            <a href={social.href} key={social.name} target="_blank" >
              {social.logo}
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Footer