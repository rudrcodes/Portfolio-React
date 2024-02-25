import { motion } from "framer-motion"
export const RudranshName = () => {
    const nameMotion = {
        rest: {
            opacity: 0.2,
            // y: 0,
            // width: 10,
            height: 0,
            transition: {
                duration: 0.4,
                type: "bounce",
                ease: "easeIn"
            },
        },
        hover: {
            // y: "200%",
            // width: "110%",
            height: "110%",
            transition: {
                duration: 0.5,
                type: "bounce",
                ease: "easeOut"
            }
        }
    };
    return (

        <motion.div className="overflow-hidden py-2  text-white font-bold " initial="rest"
            animate="rest"
            whileHover="hover">
            <motion.div className="relative cursor-none flex justify-start items-center flex-col" >

                <motion.span variants={nameMotion} className="bg-gray-100  w-full absolute " >&nbsp;</motion.span>
                <motion.h1 className="text-6xl  rounded-md">
                    {/* <motion.h1 className="text-6xl px-3 py-1 rounded-md"> */}
                    Rudransh Aggarwal ,
                </motion.h1>

            </motion.div>
        </motion.div>
    )
}