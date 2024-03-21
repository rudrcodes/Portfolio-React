import { motion } from "framer-motion"

import SkillsTab from "../../components/not-common/SkillsTab";
import AboutComp from "../../components/not-common/AboutComp";
import Header from "../../components/not-common/header/Header";
import WorkEx from "../../components/WorkEx";
import Projects from "../projects/Projects";


// Rudransh Aggarwal ko inital load pe coh jo random chars vali animation h voh krunga, jisme random chars ate hn 
function Home() {

    // const ref = useRef(null)
    // const isInView = useInView(ref, { once: false })

    // useEffect(() => {
    //     console.log("Element is in view : ", isInView)
    // }, [isInView])



    // const randomCharAnimation = {
    //     rest: {

    //     },
    //     hover: {

    //     }
    // }

    return (

        <motion.div className='font-mono flex-1 bg-[#131515]  flex justify-center items-center text-white text-3xl font-bold w-full flex-col md:px-10 md:py-3 p-5   '
            // <motion.div className=' bg-[#2C1A1D] flex-1 flex justify-center items-center text-white text-3xl font-bold w-full flex-col md:px-10 md:py-7 p-5   '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1.2,
                delay: 1,
                ease: "easeIn"
            }}
        >
            <marquee className="text-[20px]"><span className="text-red-300">Update :</span> Working on Projects Section</marquee>

            {/* Section -1 */}
            <Header />


            {/* Section - 2 (About(Left) + Skills Tab(Right) )*/}
            <AboutComp />

            <SkillsTab />
            <Projects />

            {/* <WorkEx /> */}
            {/* <motion.div className="md:w-[60%] w-full">
                    <AboutComp />
                </motion.div>
                <motion.div className="md:w-[40%] w-full">

                    <SkillsTab />
                </motion.div> */}



            {/* Section - 3 (Projects)*/}
            < motion.section >

            </motion.section >


            {/* Section - 3 (Contact Part {Again} )*/}
            < motion.section >

            </motion.section >


        </motion.div >

    )
}

export default Home


{/* TODO: Optional : ADD the random chars loading text on the name ("Rudransh Aggarwal")  */ }
{/* <motion.h1 className="text-4xl mt-10"
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={randomCharAnimation}
            >
                Rudransh : random chars animation practice
            </motion.h1> */}