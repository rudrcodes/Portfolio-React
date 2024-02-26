import { motion } from "framer-motion"
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
                <motion.h1 className=" text-2xl md:text-4xl lg:text-6xl  rounded-md flex justify-center items-center gap-1"
                >
                    {/* <motion.h1 className="text-6xl px-3 py-1 rounded-md"> */}
                    {nameArr.map((char) => {
                        return <motion.div
                            className="hover:border-b-2  transition-all ease-in-out "
                            key={Math.random() * 100}>{char}</motion.div>
                    })}


                    {/* Rudransh Aggarwal , */}
                </motion.h1>

            </motion.div>
        </motion.div>
    )
}