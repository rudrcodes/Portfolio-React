import { motion } from "framer-motion"

const AboutComp = () => {
    return (
        <motion.div
            className='bg-red-800  flex justify-center items-start text-white  font-bold w-full h-full flex-col text-start'
        >
            <h1>About Section hai</h1>
            <p>Apne bare mein likhunga idhar</p>

        </motion.div>
    )
}

export default AboutComp