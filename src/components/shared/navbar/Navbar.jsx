import { motion } from "framer-motion"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import logo from "../../../assets/Group.svg"
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

  const imgHoverAnim = {
    rest: {
      scale: 1
    },
    hover: {
      scale: 1.11
    }
  }

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
    <motion.div className=" bg-[#F9F4F5]  border-b-4  px-10 flex justify-between items-center w-screen rounded-b-3xl">
      <motion.div className="relative  rounded-md p-1" >
        <motion.a href="/"
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <motion.img variants={imgHoverAnim} src={logo} alt="logo" className="w-10 " />
        </motion.a>

      </motion.div>

      {/* <MobileNav />
      <DesktopNav links={links} /> */}



    </motion.div >
  )
}

export default Navbar