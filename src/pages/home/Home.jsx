import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import { RudranshName } from "../../components/not-common/header/RudranshName";


// Rudransh Aggarwal ko inital load pe coh jo random chars vali animation h voh krunga, jisme random chars ate hn 
function Home() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })

    useEffect(() => {
        console.log("Element is in view : ", isInView)
    }, [isInView])


    // const randomCharAnimation = {
    //     rest: {

    //     },
    //     hover: {

    //     }
    // }

    return (
        <motion.div className="flex justify-center items-center text-center bg-blue-200 gap-2">
            <p className="text-3xl font-light">
            Hi there !! I am
            </p>
            <motion.div className="overflow-hidden p-4 bg-red-900 font-bold" initial="rest"
                animate="rest"
                whileHover="hover">
                <RudranshName />
            </motion.div>

            {/* TODO: Optional : ADD the random chars loading text on the name ("Rudransh Aggarwal")  */}
            {/* <motion.h1 className="text-4xl mt-10"
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={randomCharAnimation}
            >
                Rudransh : random chars animation practice
            </motion.h1> */}


        </motion.div>
    )
}

export default Home
