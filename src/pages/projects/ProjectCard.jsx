/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import batman from "../../assets/batman.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


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
         hover:scale-105  transition-all delay-[40ms] duration-100  mx-2 my-3 h-[300px] md:h-full cursor-pointer
        ">
            ProjectCard
            <img src={batman || projectImg} alt="Projcet SS" className="h-32 md:h-40 md:w-56 " />

            <div className="text-sm"> {projid}</div>
            <div className="text-sm"> {projName}</div>
            <div className="text-sm "> {projectHostedUrl}
                <a href={projectHostedUrl} target="_blank" >
                    <FaLink />
                </a>
            </div>
            <div className="text-sm "> {projectGithubUrl}
                <a href={projectGithubUrl} target="_blank" >
                    <FaGithub />
                </a>
            </div>

        </motion.div>
    )
}

export default ProjectCard