import ProjectCard from "./ProjectCard"
// import Glider from 'react-glider';
// import 'glider-js/glider.min.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useRef } from "react";
import { motion } from "framer-motion"

import style from "./project.module.css"

// TODO : Uninstall react-glider and cause using react-slick instead
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "red" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }
const Projects = () => {

    // let sliderRef = useRef(null);
    // const play = () => {
    //     sliderRef.slickPlay();
    // };
    // const pause = () => {
    //     sliderRef.slickPause();
    // };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        // nextArrow:null
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        arrows: false,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        dotsClass: `slick-dots ${style.mySlickDots}`
    };
    // abhi ke liye hard code , baad mein backend se fetch krunga
    const projectData = [
        {
            id: 1,
            projectName: "Shop Manager Dashboard",
            projectImg: '/shopManager.png',
            projectHostedUrl: "https://rudransh-fyntune-assignment.netlify.app/",
            projectGithubUrl: "https://github.com/rudrcodes/fyntune-assignment"
        },
        {
            id: 2,
            projectName: "Chart Visualizer",
            projectImg: "/chartVisualizer.png",
            projectHostedUrl: "https://rudransh-nioclass-assignment.netlify.app/",
            projectGithubUrl: "https://github.com/rudrcodes/ChartJS-with-ReactJS"
        },
        {
            id: 3,
            projectName: "Basic Chat App",
            projectImg: "/chatApp.png",
            projectHostedUrl: "https://rudransh-socket-chat-app.netlify.app/",
            projectGithubUrl: "https://github.com/rudrcodes/Basic-Chat-App-Socket"
        },
        {
            id: 4,
            projectName: "MiPlace: Hotel Website",
            projectImg: "/miplaceApp.png",
            projectHostedUrl: "https://miplace-app.onrender.com/",
            projectGithubUrl: "https://github.com/aruljohnsonalmabetter/MiPlace-Frontend"
        },
        {
            id: 5,
            projectName: "Notes App",
            projectImg: "/notesApp.png",
            projectHostedUrl: "https://rudransh-notes-app.netlify.app/",
            projectGithubUrl: "https://github.com/rudrcodes/Notes-App-ReactJS-"
        },
        {
            id: 6,
            projectName: "Pig Game: A cute short game ",
            projectImg: "/pigGame.png",
            projectHostedUrl: "https://rudrcodes.github.io/pig-game/",
            projectGithubUrl: "https://github.com/rudrcodes/pig-game"
        },
        {
            id: 7,
            projectName: "AI Article Summarizer",
            projectImg: "/SummarizeApp.png",
            projectHostedUrl: "https://rudransh-ai-summarizer.netlify.app/",
            projectGithubUrl: "https://github.com/rudrcodes/AI-Article-Summarizer"
        },
        {
            id: 8,
            projectName: "Calender Emulation App",
            projectImg: "/calenderEmulator.png",
            projectHostedUrl: "https://rudransh-aggarwal-assignment.netlify.app/",
            projectGithubUrl: "https://github.com/rudrcodes/calender-emulation-app"
        },

    ]
    return (
        <motion.div
            // className='bg-green-800 flex-1 flex justify-center items-center text-white text-3xl font-bold w-full flex-col py-5'
            className='flex justify-center items-start text-white  font-bold w-full  flex-col text-start md:p-5 text-xl md:text-3xl my-6 border-l-2 rounded-sm border-gray-200 md:px-5 md:py-2 px-3 py-2 '
        >

            <h1>Projects :</h1>
            <Slider
                className="w-full "
                // className="w-full flex justify-center items-center gap-3 bg-yellow-400"
                // className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-7  mt-4"

                // ref={slider => (sliderRef = slider)} 
                {...settings}
            >
                {projectData.length > 0 && projectData.map((project) => (
                    <ProjectCard key={project.id}
                        projid={project.id}
                        projName={project.projectName}
                        projectImg={project.projectImg}
                        projectHostedUrl={project.projectHostedUrl}
                        projectGithubUrl={project.projectGithubUrl}

                    />
                ))}
            </Slider>
            {/* <div style={{ textAlign: "center" }}>
                <br/>
                <button className="button" onClick={play}>
                    Play
                </button>
                <br/>
                <button className="button" onClick={pause}>
                    Pause
                </button>
            </div> */}

            {/* <ul className="flex justify-center items-center gap-1 sm:flex-col md:flex-row sm:flex-wrap md:flex-nowrap"> */}
            {/* <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-7  mt-4">
                {projectData.length > 0 && projectData.map((project) => (
                    <ProjectCard key={project.id}
                        projid={project.id}
                        projName={project.projectName}
                        projectImg={project.projectImg}
                        projectHostedUrl={project.projectHostedUrl}
                        projectGithubUrl={project.projectGithubUrl}

                    />
                ))}

            </ul> */}

        </motion.div>
    )
}
export default Projects