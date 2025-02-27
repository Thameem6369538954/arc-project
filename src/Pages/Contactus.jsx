import React from 'react'
import { motion } from "framer-motion";


const Contactus = () => {
  return (
    <div className='min-h-[100vh] bg-[#f4d1ff] mt-15 md:mt-32 '>
      <h1 className='font-[Belli] text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-5 px-5 text-white tracking-wide p-5'>Contact Us </h1>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-4 ">
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[60%] font-[choco]">
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg  shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">India</h3>
              <p className="text-sm mb-3">+91 78 11 999 999</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">Canada</h3>
              <p className="text-sm mb-3">+1(647)948-8116</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">USA(Toll-Free-Number)</h3>
              <p className="text-sm mb-3">+1 (833) 387-7445</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">Srilanka</h3>
              <p className="text-sm mb-3">94 757333666</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">Malaysia</h3>
              <p className="text-sm mb-3">+60 109 429 034</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
      <motion.div
             
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-lg border"
            >
              <h3 className="text-lg font-bold mb-2">Bangladesh</h3>
              <p className="text-sm mb-3">+91 7305019268</p>
              <button className="px-4 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
                View Map
              </button>
            </motion.div>
            </motion.div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-10 ">
        <h2 className="text-2xl font-[belli] text-[#94bfa4] mb-5">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-3 border rounded-md font-[choco] " />
          <input type="text" placeholder="Phone number" className="p-3 border rounded-md font-[choco]" />
          <input type="text" placeholder="Location" className="p-3 border rounded-md font-[choco]" />
          <textarea placeholder="Message" className="p-3 border rounded- font-[choco]" rows="3"></textarea>
        </div>
        <div className="mt-4 flex items-center gap-2 font-[choco]">
          <input type="checkbox" className="w-4 h-4" />
          <span>Opt-in for WhatsApp updates</span>
        </div>
        <button className="font-[choco] mt-4 px-6 py-2 bg-[#d25c78] text-white rounded-md hover:scale-105 transition-all w-full sm:w-auto">
          Submit
        </button>
      </div>
      </div>
    </div>
  )
}

export default Contactus