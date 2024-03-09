import { motion } from "framer-motion"

import SkillsTab from "../../components/not-common/SkillsTab";
import AboutComp from "../../components/not-common/AboutComp";
import Header from "../../components/not-common/header/Header";


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

        <motion.div className=' bg-[#2C1A1D] flex-1 flex justify-center items-center text-white text-3xl font-bold w-full flex-col p-5   '>

            {/* Section -1 */}
            <Header />


            {/* Section - 2 (About(Left) + Skills Tab(Right) )*/}
            < motion.section className="flex justify-center items-center w-full" >

                <motion.div className="w-[60%]">
                    <AboutComp />
                </motion.div>
                <motion.div className="flex-1">

                    <SkillsTab />
                </motion.div>

            </motion.section >


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