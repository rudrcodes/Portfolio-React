import { motion } from "framer-motion"

const AboutComp = () => {
    return (
        <motion.div
            className='flex justify-center items-start text-white  font-bold w-full h-full flex-col text-start md:p-5 text-xl md:text-3xl my-5'>
            <h1>About Section hai</h1>
            <p className="text-sm md:text-base mt-4">
                🚀 Committed and passionate, I{"'"}m Rudransh Aggarwal, a final-year Computer Science student and Full Stack Developer 💻 specializing in the MERN stack. With practical experience acquired from internships at various startups and established companies, I bring a tireless work ethic and an unyielding enthusiasm for learning new technologies. Ready to infuse your team with fresh perspectives and innovative solutions, I embody a dedication to excellence and a hunger for knowledge. 🌟
            </p>

        </motion.div>
    )
}

export default AboutComp