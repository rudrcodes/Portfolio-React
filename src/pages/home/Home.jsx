import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import { RudranshName } from "../../components/not-common/header/RudranshName";
import { SpringAnimation } from "../../components/not-common/spring-animation";
import { CiMail } from "react-icons/ci";
import { SvgNameAnimation } from "../../components/not-common/SvgNameAnimation";
import { WavyBackground } from "../../components/wavy-background";
import { BackgroundBeams } from "../../components/background-beams";


// Rudransh Aggarwal ko inital load pe coh jo random chars vali animation h voh krunga, jisme random chars ate hn 
function Home() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })

    useEffect(() => {
        console.log("Element is in view : ", isInView)
    }, [isInView])


    const buttonShiftAnimation = {
        rest: {
            // x: 10,
            // y: 10,
            // scale: 1
            transform: "translateX(7px) translateY(7px)",

        },
        hover: {
            // x: -4,
            // y: -4,
            transform: "translateX(0px) translateY(0px)",

            // scale: 1.1
        }
    }

    // const randomCharAnimation = {
    //     rest: {

    //     },
    //     hover: {

    //     }
    // }

    return (
        // bg-[#2C1A1D]
        // bg-[#1A1A1A]
        <motion.div className="overflow-hidden flex justify-center  items-center w-full   bg-[#2C1A1D] gap-2 h-full text-white  px-10 py-10 bg-my-class">
            {/* <WavyBackground className="max-w-4xl mx-auto pb-40"> */}
            <motion.div className="flex justify-center w-full items-center md:items-start text-center md:text-start flex-col h-full  gap-10">

                <motion.div className="flex justify-center w-[90%] items-center md:items-start  text-center md:text-start flex-col gap-5 ">
                    <motion.div className="overflow-hidden px-2 py-3 md:px-3 md:py-5 bg-red-200 rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 1,
                            ease: "easeIn"
                        }}


                    >
                        <motion.div className="flex justify-center items-center  text-black text-bold  h-full"
                            initial={{ opacity: 1, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.7,
                                ease: "easeInOut"
                            }}

                        >
                            <span className="text-2xl md:text-4xl">
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
                            }}


                        >

                            <RudranshName />
                            {/* <span className="text-4xl">,</span> */}



                        </motion.div>
                    </motion.div>

                    <motion.div className="overflow-hidden px-2 py-3 md:px-3 md:py-5 bg-yellow-400 rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 1,
                            ease: "easeIn"
                        }}


                    >
                        <motion.div className="flex justify-center items-center   text-black text-bold h-full"
                            initial={{ opacity: 1, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.7,
                                ease: "easeInOut"
                            }}

                        >

                            <span className="text-2xl md:text-4xl">
                                Your friendly Full Stack Developer crafting digital wonders! 🚀✨
                            </span>

                        </motion.div>
                    </motion.div>


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

                >
                    <motion.div className="border-4 rounded-xl  border-l-red-900 
                    border-r-blue-900
                    border-t-green-900
                    border-b-yellow-900
                    flex bg-white justify-center  items-center ">
                        <motion.button className="border-4 rounded-md  flex justify-center items-center  gap-2  border-l-red-900 
                    border-r-blue-900
                    border-t-green-900
                    border-b-yellow-900  px-10 py-2  text-black text-bold text-2xl"
                            initial="rest"
                            animate="rest"
                            // whileHover="hover"
                            whileTap="hover"
                            variants={buttonShiftAnimation}
                        >
                            Mail me <CiMail size={24} />

                        </motion.button>

                    </motion.div>
                </motion.div>

            </motion.div>
            {/* <motion.div className="   h-full">
                <SpringAnimation />
            </motion.div> */}
        </motion.div >

    )
}

export default Home


{/* TODO: Optional : ADD the random chars loading text on the name ("Rudransh Aggarwal")  */ }
{/* <motion.h1 className="text-4xl mt-10"
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={randomCharAnimation}
            >
                Rudransh : random chars animation practice
            </motion.h1> */}