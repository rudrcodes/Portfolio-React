import { motion } from 'framer-motion';
import skills from "../assets/skills.svg"
const RotatingAnimation = () => {
    // const hoverRotateAnim = {
    //     rest: {
    //         rotate: 360,
    //         transition: {
    //             duration: 5, repeat: Infinity, ease: 'linear'
    //         }
    //     },
    //     hover: {
    //         rotate: 360,
    //         transition: {
    //             repeat: "reverse",
    //             duration: 7,
    //             ease: 'linear'
    //         }
    //     }
    // }
    return (
        <div style={{ width: '30%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='pointer-events-none	select-none '>
            <motion.div
                // style={{ width: 100, height: 100, backgroundColor: 'blue', borderRadius: '50%' }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}

            // initial="rest"
            // animate="rest"
            // whileHover="hover"
            // variants={hoverRotateAnim}
            >
                <motion.img className='select-none ' src={skills} alt="text" />
                {/* <motion.img className='select-none ' src={rocketAnimation} alt="text" /> */}
            </motion.div>
        </div>
    );
};

export default RotatingAnimation;
