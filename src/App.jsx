import { AllRoutes } from "./AllRoutes"
import Footer from "./components/shared/footer/Footer"
import Navbar from "./components/shared/navbar/Navbar"
import { motion } from "framer-motion"


function App() {

  return (
    <motion.main
      className="overflow-x-hidden  h-screen flex justify-between items-center flex-col bg-green-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.4 }}
    >
      <Navbar />
      <motion.div className="">
      {/* <motion.div className="h-[calc(100vh-140px)]"> */}
        <AllRoutes />
      </motion.div>
      <Footer />
    </motion.main>
  )
}

export default App
