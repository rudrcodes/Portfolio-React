import { CiMail } from "react-icons/ci";
import { toast } from "react-toastify";
import { motion } from "framer-motion"
import { RudranshName } from "./RudranshName";
import { TbDownload } from "react-icons/tb";
import resumePdf from "../../../assets/resume.pdf"

const Header = () => {

  const buttonAnimation = {
    rest: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      },
    },
    hover: {
      opacity: 0,
      display: "none",
      y: "100%",
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut"
      }
    }
  }
  const buttonAnimationDownload = {
    rest: {
      opacity: 0,
      y: -100,
      display: "none",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  }
  const buttonShiftAnimation = {
    rest: {
      transform: "translateX(6px) translateY(7px)",

    },
    hover: {
      transform: "translateX(0px) translateY(0px)",
    }
  }

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText("aggarwalrudransh@gmail.com");
      console.log("Text copied successfully!");
      toast('✅ Mail copied successfully!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      toast.error('Error in copying mail!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Failed to copy text:", err);
    }
  };
  const dwnldResume = async () => {
    try {
      await navigator.clipboard.writeText("aggarwalrudransh@gmail.com");
      console.log("Text copied successfully!");
      toast('✅ Resume download successfully!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      toast.error('Error in copying mail!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <motion.section className="flex justify-center w-full items-center md:items-start text-center  flex-col  gap-10 m-5">
      <motion.div className="flex justify-center w-full items-center text-center gap-5 ">
        <motion.div className="flex justify-center w-full items-center md:items-start  text-center md:text-start flex-col gap-5 ">
          <motion.div className="overflow-hidden px-2 py-3 md:px-3 md:py-5 bg-red-200 rounded-md w-full md:text-start sm:text-center"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{
          //   duration: 1.2,
          //   delay: 1,
          //   ease: "easeIn"
          // }}
          >
            <motion.div className="flex md:justify-start justify-center text-center md:text-start items-center   text-black text-bold h-full"
              initial={{ opacity: 1, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: "easeInOut"
              }}

            >
              <span className="text-xl md:text-2xl lg:text-4xl">
                👋 Hi there! I{"'"}m
              </span>


            </motion.div>
          </motion.div>

          <motion.div className="overflow-hidden  px-2 md:px-3   ">
            <motion.div className="flex justify-center items-center    h-full"
              initial={{ opacity: 1, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: "easeInOut"
              }}>
              <RudranshName />
            </motion.div>
          </motion.div>

          <motion.div className="overflow-hidden px-2 py-3 md:px-3 md:py-5 bg-yellow-400 rounded-md w-full text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: "easeIn"
            }}


          >
            <motion.div className="flex md:justify-start justify-center text-center md:text-start items-center   text-black text-bold h-full"
              initial={{ opacity: 1, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: "easeInOut"
              }}

            >

              <motion.div className="text-xl md:text-2xl lg:text-4xl inline-block">
                Your friendly Full Stack Developer crafting digital wonders!
              </motion.div>

            </motion.div>
          </motion.div>
        </motion.div>

        {/* TODO */}
        <motion.div
          className="lg:inline-block cursor-none hidden lg:text-[250px] pointer-events-none "
          aria-disabled

          animate={{
            x: [0, 5, -10, 0],
            y: [0, 15, 4, 0],
            // x: [0, 5, -10, 0, 5, -10, 0],
            // y: [0, 5, -10, 0, 5, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            // type: "easeInOut",
            // type: "spring",
            duration: 1
          }}
        >🚀</motion.div>


      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 1,
          ease: "easeIn"
        }}
        className="flex justify-center items-center gap-5 flex-wrap"

      >


        <motion.div className=" border-4 rounded-md  border-l-red-900 
        border-r-blue-900
        border-t-green-900
        border-b-yellow-900
        flex bg-white justify-center  items-center ">
          <motion.button className="bg-white border-4 rounded-md  flex justify-center items-center  gap-2  border-l-red-900 
        border-r-blue-900
        border-t-green-900
    border-b-yellow-900  px-10 py-2  text-black text-bold text-sm md:text-lg"
            initial="rest"
            animate="rest"
            // whileHover="hover"
            whileTap="hover"
            variants={buttonShiftAnimation}
            onClick={copyText}
          >
            Copy mail <CiMail />

          </motion.button>


        </motion.div>

        <motion.div className="border-4 rounded-md  border-l-red-900 
        border-r-blue-900
        border-t-green-900
        border-b-yellow-900
        flex bg-white justify-center  items-center ">

          <motion.button className="bg-white border-4 rounded-md  flex justify-center items-center  gap-2  border-l-red-900 
        border-r-blue-900
        border-t-green-900
    border-b-yellow-900  px-10 py-2   text-black text-bold text-sm md:text-lg"
            initial="rest"
            animate="rest"
            // whileHover="hover"
            whileTap="hover"
            variants={buttonShiftAnimation}
          // onClick={copyText}
          >
            <motion.a download="Rudransh-Resume" href={resumePdf} className="flex justify-center items-center gap-2">
              Resume
              <TbDownload />
            </motion.a>
          </motion.button>


        </motion.div>
      </motion.div>
    </motion.section >
  )
}

export default Header