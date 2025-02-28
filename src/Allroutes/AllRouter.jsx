import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../Pages/Home"
import About_arc from "../Pages/About_arc"
import OurTeam from "../Pages/OurTeam"
import Services_and_Treatment from "../Components/Services_and_Treatment"
import ProfileDetails from "../Components/ProfileDetails"
import FAQ from "../Components/Faq.jsx"
import TeamMemberProfile from "../Components/TeamMemberProfile.jsx"
import OurFacilities from '../Pages/OurFacilities.jsx'
import Testimonial from '../Pages/Testimonial.jsx'
import Awards from '../Pages/Awards.jsx'
import OurExports from '../Pages/OurExports.jsx'
import Contactus from '../Pages/Contactus.jsx'
import Ourcenters from '../Pages/Ourcenters.jsx'
import LocationDetails from '../Pages/LocationDetails.jsx'
import EggFreezingPage from "../FesPages/EggFreezing.jsx"

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services_and_Treatment' element={<Services_and_Treatment />} />
            <Route path='/About_arc' element={<About_arc />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/OurTeam' element={<OurTeam />} />
            <Route path='/OurFacilities' element={<OurFacilities />} />
            <Route path="/team/:name" element={<TeamMemberProfile />} />
            <Route path="/Awards" element={<Awards />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Ourcenters" element={<Ourcenters />} />
            <Route path="/OurExports" element={<OurExports />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/Ourcenters/:name" element={<LocationDetails />} />
            <Route path="/EggFreezingPage" element={<EggFreezingPage />} />
            
            
        </Routes>
    </div>
  )
}

export default AllRouter