import { motion } from "framer-motion"
import { useDragControls } from "framer-motion"

export const RudranshName = () => {
    // TODO : Spring jump animation on each char of my name same as that of J something portfolio
    const nameMotion = {
        rest: {
            // opacity: 0.2,
            // y: 0,
            // width: 10,
            y: 0,
            transition: {
                duration: 0.4,
                type: "bounce",
                ease: "easeIn"
            },
        },
        hover: {
            // y: "200%",
            // width: "110%",
            y: 10,
            transition: {
                duration: 0.5,
                type: "bounce",
                ease: "easeOut"
            }
        }
    };
    const controls = useDragControls()


    const hovernameAnimation = {
        rest: {
            // opacity: 0.2,
            // y: 0,
            // width: 10,
            y: 0,
            transition: {
                duration: 0.2,
                type: "easeIn",
                // ease: "ease"
            },
        },
        hover: {
            // y: "200%",
            // width: "110%",
            // opacity: 0,
            y: -10,
            transition: {
                duration: 0.2,
                // type: "easeOut",
                type: "spring", stiffness: 100
                // ease: "easeOut"
            }
        }
    }
    let myName = "Rudransh Aggarwal"
    let nameArr = myName.split("")
    console.log(nameArr)
    return (

        <motion.div className="overflow-hidden py-1 md:py-2  text-white font-bold " initial="rest"
            animate="rest"
            whileHover="hover"
        >
            <motion.div className="relative  flex justify-start items-center flex-col" >
                {/* <motion.div className="relative cursor-none flex justify-start items-center flex-col" > */}

                {/* <motion.span variants={nameMotion} className="bg-gray-100  w-full absolute " >&nbsp;</motion.span> */}
                <motion.h1 className=" text-2xl md:text-4xl lg:text-6xl  rounded-md flex justify-center items-center gap-3 "
                >
                    {/* <motion.h1 className="text-6xl px-3 py-1 rounded-md"> */}
                    {/* {nameArr.map((char) => {
                        return <motion.div
                            variants={hovernameAnimation}

                            className="hover:border-b-2  transition-all ease-in-out "
                            key={Math.random() * 100}>{char}</motion.div>
                    })} */}
                    <motion.div className="flex justify-center items-center "  >

                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>R</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>u</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>d</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>r</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>a</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>n</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>s</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>h</motion.h2>
                    </motion.div>

                    <motion.div className="flex justify-center items-center ">

                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>A</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>g</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>g</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>a</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>r</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>w</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>a</motion.h2>
                        <motion.h2 drag dragControls={controls} initial="rest" animate="rest" whileHover="hover" variants={hovernameAnimation}>l</motion.h2>
                    </motion.div>
                    <motion.span
                        // drag dragControls={controls}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                    // className='pointer-events-none	select-none '
                    >
                        🌍
                    </motion.span>
                    {/* Rudransh Aggarwal , */}
                </motion.h1>

            </motion.div>
        </motion.div>
    )
}