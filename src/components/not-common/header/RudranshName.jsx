import { motion } from "framer-motion"
export const RudranshName = () => {
    const nameMotion = {
        rest: {
            opacity: 0.5,
            // y: 0,
            height: 0,
            transition: {
                duration: 0.4,
                type: "bounce",
                ease: "easeIn"
            },
        },
        hover: {
            // y: "200%",
            height: "100%",
            transition: {
                duration: 0.5,
                type: "bounce",
                ease: "easeOut"
            }
        }
    };
    return (
        <motion.div
            initial={{ opacity: 1, y: 100 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{
                duration: 1.2,
                delay: 0.7,
                ease: "easeInOut"
            }}

            className="relative cursor-none flex justify-start items-center flex-col" >

            <motion.span variants={nameMotion} className="bg-blue-500  w-full absolute " >&nbsp;</motion.span>
            <motion.h1 className="text-6xl">
                Rudransh Aggarwal
            </motion.h1>
        </motion.div>
    )
}