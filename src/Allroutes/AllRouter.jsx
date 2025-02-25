import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../Pages/Home"
import About_arc from "../Pages/About_arc"
import OurTeam from "../Pages/OurTeam"
import Services_and_Treatment from "../Components/Services_and_Treatment"
import TeamMemberProfile from "../Components/TeamMemberProfile.jsx"
import OurFacilities from '../Pages/OurFacilities.jsx'
import Testimonial from '../Pages/Testimonial.jsx'
import Awards from '../Pages/Awards.jsx'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services_and_Treatment' element={<Services_and_Treatment />} />
            <Route path='/About_arc' element={<About_arc />} />
            <Route path='/OurTeam' element={<OurTeam />} />
            <Route path='/OurFacilities' element={<OurFacilities />} />
            <Route path="/team/:name" element={<TeamMemberProfile />} />
            <Route path="/Awards" element={<Awards />} />
            <Route path="/Testimonial" element={<Testimonial />} />
        </Routes>
    </div>
  )
}

export default AllRouter