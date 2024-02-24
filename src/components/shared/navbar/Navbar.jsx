import { motion } from "framer-motion"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
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


  return (
    <motion.div className=" bg-red-200 py-2 px-10 flex justify-between items-center w-screen">
      <motion.div className="relative" >
        <motion.a href="/"
          initial="rest"
          animate="rest"

        >
          RudranshAggarwal
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