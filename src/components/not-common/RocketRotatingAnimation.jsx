import { motion } from "framer-motion"
import rocket from "../../assets/rocket-animation.svg"
const RocketRotatingAnimation = () => {
  return (
    <motion.div


    >
      <motion.img
        animate={{ rotate: 720 }}
        transition={{ repeat: Infinity, duration: 2, type:"spring" }}

        src={rocket} alt="rocket" className="w-64" />
      RocketRotatingAnimation
    </motion.div>
  )
}

export default RocketRotatingAnimation