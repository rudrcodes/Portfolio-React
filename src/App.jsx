import { AllRoutes } from "./AllRoutes"
import Footer from "./components/shared/footer/Footer"
import Navbar from "./components/shared/navbar/Navbar"
import { motion } from "framer-motion"


function App() {

  return (
    <motion.main
      className="overflow-x-hidden  h-screen flex justify-between items-center flex-col w-screen bg-[#1A1A1A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.4 }}
    >
      <Navbar />
      <AllRoutes />
      <Footer />
    </motion.main>
  )
}

export default App
