import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../Pages/Home"
import About_arc from "../Pages/About_arc"
import OurTeam from "../Pages/OurTeam"
import Services_and_Treatment from "../Components/Services_and_Treatment"

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services_and_Treatment' element={<Services_and_Treatment />} />
            <Route path='/About_arc' element={<About_arc />} />
            <Route path='/OurTeam' element={<OurTeam />} />
        </Routes>
    </div>
  )
}

export default AllRouter