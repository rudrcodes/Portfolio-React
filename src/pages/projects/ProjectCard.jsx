/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import batman from "../../assets/batman.jpg"
const ProjectCard = (
    {
        projid,
        projName,
        projectImg,
        projectHostedUrl,
        projectGithubUrl
    }
) => {
    return (
        <motion.div
            className="
         bg-red-600 border-2 border-black p-3 rounded-lg flex justify-center items-center flex-col
         hover:scale-105  transition-all delay-[40ms] duration-100  w-[400px]
        ">
            ProjectCard
            <img src={batman} alt="Projcet SS" className="h-40 w-56 " />

            <div className="text-sm"> {projid}</div>
            <div className="text-sm"> {projName}</div>
            <div className="text-sm"> {projectImg}</div>
            <div className="text-sm"> {projectHostedUrl}</div>
            <div className="text-sm"> {projectGithubUrl}</div>
        </motion.div>
    )
}

export default ProjectCard