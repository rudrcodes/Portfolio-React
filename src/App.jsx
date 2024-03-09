import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { AllRoutes } from "./AllRoutes"
import Footer from "./components/shared/footer/Footer"
import Navbar from "./components/shared/navbar/Navbar"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";


function App() {
  const [path, setPath] = useState("/")
  useEffect(() => {
    setPath(window.location.pathname)
    console.log(window.location.pathname)
  }, [path])
  const pathColors = ["bg-[#2C1A1D]", "bg-green-800", "bg-red-900"]

  return (
    <motion.main
      // className={` bg-[#2C1A1D] overflow-x-hidden h-screen flex justify-between items-center flex-col flex-1 w-screen `}
      className={`${path === "/" ? pathColors[0] : path === "/projects" ? pathColors[1] : pathColors[2]} overflow-x-hidden h-screen flex justify-between items-center flex-col flex-1 w-screen bg-[#2C1A1D] `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.4 }}
    >
      <Navbar />
      <ToastContainer />
      <AllRoutes />
      <Footer />
    </motion.main>
  )
}

export default App
