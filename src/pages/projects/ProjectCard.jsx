/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
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
         bg-[#DD1155]  text-white rounded-lg flex justify-center items-center flex-col
         transition-all delay-[40ms] duration-100  mx-2 my-3 h-full cursor-pointer"
        //     className="
        //  bg-red-100  text-black rounded-lg flex justify-center items-center flex-col
        //  hover:scale-105  transition-all delay-[40ms] duration-100  mx-2 my-3 h-[300px] md:h-full cursor-pointer"
        >
            <img src={projectImg} alt="Projcet SS" className=" w-full rounded-t-lg " />
            {/* <img src={batman || projectImg} alt="Projcet SS" className="h-32  md:h-40 md:w-56 " /> */}
            <div className="m-3 px-3 flex justify-between items-center w-full flex-col ">
                <div className="m-2 flex justify-between items-center w-full  ">
                    <div className="text-sm lg:text-[18px]"> {projName}</div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-sm lg:text-[18px] text-gray-300 hover:scale-125 hover:text-black transition-all delay-[40ms] duration-100">
                            <a href={projectHostedUrl} target="_blank" >
                                <FaLink />
                            </a>
                        </div>
                        <div className="text-sm lg:text-[18px] text-gray-300 hover:scale-125 hover:text-black transition-all delay-[40ms] duration-100">
                            <a href={projectGithubUrl} target="_blank" >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* TODO : Add the tech used like ReactJS, TS, NextJS etc */}
                <div className="text-sm lg:text-[18px] text-start w-full">
                    Used : ReactJS , TS , NextJS
                    {/* TODO : Add the tech used like ReactJS, TS, NextJS etc, will add color bg, text and border to them , like dark border and light backgroudn color to give highlight vali feel */}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard