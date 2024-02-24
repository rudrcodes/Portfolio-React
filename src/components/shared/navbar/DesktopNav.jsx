/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

import resumePdf from "../../../assets/resume.pdf"

const DesktopNav = ({ links }) => {

    const hoverAnimation = {
        rest: {
            opacity: 1,
            x: 0,
            width: 0,
            transition: {
                duration: 0.3,
                type: "tween",
                ease: "easeIn"
            },
        },
        hover: {
            opacity: 1,
            x: "200%",
            width: "100%",
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeOut"
            }
        }
    }

    const buttonAnimation = {
        rest: {
            opacity: 1,
            y: 0,
            display: "block",
            transition: {
                duration: 0.2,
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
                duration: 0.3,
                type: "tween",
                ease: "easeOut"
            }
        }
    }


    return (
        <motion.div className=' hidden md:flex bg-green-400 text-black w-[400px] justify-center items-center gap-3 text-[18px]'>

            {links?.map((link) => {
                return (
                    <motion.div key={link.name} className="overflow-hidden leading-tight px-2 py-1"

                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                    >
                        <motion.a href={link.href}>
                            {link.name}
                        </motion.a>

                        <motion.hr

                            variants={hoverAnimation}
                            className="h-[4px] bg-red-900"
                        />
                    </motion.div>

                )
            })}

            {/*TODO: Glow the Resume button border on hover */}
            <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="overflow-hidden flex justify-center items-center flex-col  border-1 border-black rounded-md h-[30px] w-[100px]  cursor-pointer
                hover:border-[#1234] hover:border-4 hover:transition-all  delay-75 duration-75
                "
            >

                <motion.button variants={buttonAnimation} >
                    <a download href={resumePdf}>
                        Resume
                    </a>

                </motion.button>
                <motion.button variants={buttonAnimationDownload} >
                    <a download="Rudransh's Resume" href={resumePdf} >
                        {/* <FaDownload /> */}
                        <TbDownload />

                    </a>
                </motion.button>

            </motion.div>



        </motion.div >
    )
}

export default DesktopNav