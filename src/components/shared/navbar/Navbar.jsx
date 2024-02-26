import { motion } from "framer-motion"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import logo  from "../../../assets/logo.svg"
const Navbar = () => {
  const links = [
    {
      name: "Projects",
      href: "/projects",
      type: "link"

    },
    {
      name: "Contact",
      href: "/contact",
      type: "link"
    },
    // {
    //   name: "Resume",
    //   type: "button"
    // },
  ]

  const nameMotion = {
    rest: {
      opacity: 0.5,
      y: -15,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  // TODO : Glassy navbar ??
  return (
    <motion.div className="max-h-[100px]   bg-[#F9F4F5]  border-b-4  py-2 px-10 flex justify-between items-center w-screen rounded-b-3xl">
      <motion.div className="relative bg-red-900 rounded-md p-1" >
        <motion.a href="/"
          initial="rest"
          animate="rest"
      

        >
          <img src={logo} alt="logo" className="h-10 "/>
        </motion.a>
        {/* <motion.div
          initial="rest"
          animate="rest"
          whileHover="hover"
          variants={nameMotion}
          className="bg-blue-500 h-[10px] w-full absolute hidden md:block" >&nbsp;</motion.div> */}
        {/* TODO: Design a minimal name logo in AdobeXD or Figma */}
      </motion.div>

      <MobileNav />
      <DesktopNav links={links} />



    </motion.div >
  )
}

export default Navbar