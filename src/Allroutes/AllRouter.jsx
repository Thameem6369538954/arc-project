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
import Why_Choose_us from '../Pages/Why_Choose_us.jsx'
import Contactus from '../Pages/Contactus.jsx'
import Ourcenters from '../Pages/Ourcenters.jsx'
import LocationDetails from '../Pages/LocationDetails.jsx'
import EggFreezing from "../ServPages/EggFreezing.jsx"
import Dummy from "../Pages/Dummy.jsx"

{/* treatpage */}
// import Meditation_Can_Help_You_Regain_Fertility from "../TreatPages/Meditation_Can_Help_You_Regain_Fertility.jsx"
// import Intrauterine_Insemination from "../TreatPages/Intrauterine_Insemination.jsx"
import FertilizationIVF from "../TreatPages/FertilizationIVF.jsx"
import Fertility_Preservation_For_Cancer_Patients from "../TreatPages/Fertility_Preservation_For_Cancer_Patients.jsx"
import Preventing_Miscarriages from "../TreatPages/Preventing_Miscarriages.jsx"
import Unexplained_Infertility from "../TreatPages/Unexplained_Infertility.jsx"
import Ovulation_Induction from "../TreatPages/Ovulation_Induction.jsx"
import Healthiest_Embryo from "../TreatPages/Healthiest_Embryo.jsx"
import Sperm_donor from "../TreatPages/Sperm_donor.jsx"
import Egg_donor from "../TreatPages/Egg_donor.jsx"
import Donor_Embryo from "../TreatPages/Donor_Embryo.jsx"
import Gestational_Carrier from "../TreatPages/Gestational_Carrier.jsx" 

import Fertility_preservation from "../ServPages/Fertility_preservation.jsx"
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
            <Route path="/Why_Choose_us" element={<Why_Choose_us />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/LocationDetails/:city" element={<LocationDetails />} />
            <Route path="/EggFreezing" element={<EggFreezing />} />
            
            {/* treatpage */}
            
            {/* <Route path="/Meditation_Can_Help_You_Regain_Fertility" element={<Meditation_Can_Help_You_Regain_Fertility />} /> */}
            {/* <Route path="/Intrauterine_Insemination" element={<Intrauterine_Insemination />} /> */}
            <Route path="/FertilizationIVF" element={<FertilizationIVF />} />
            <Route path="/Fertility_Preservation_For_Cancer_Patients" element={<Fertility_Preservation_For_Cancer_Patients />} />
            <Route path="/Preventing_Miscarriages" element={<Preventing_Miscarriages />} />
            <Route path="/Unexplained_Infertility" element={<Unexplained_Infertility />} />
            <Route path="/Ovulation_Induction" element={<Ovulation_Induction />} />
            <Route path="/Healthiest_Embryo" element={<Healthiest_Embryo />} />
            <Route path="/Sperm_donor" element={<Sperm_donor />} />
            <Route path="/Egg_donor" element={<Egg_donor />} />
            <Route path="/Donor_Embryo" element={<Donor_Embryo />} />
            <Route path="/Gestational_Carrier" element={<Gestational_Carrier />} />


        {/* services page */}


        <Route path="/Fertility_preservation" element={<Fertility_preservation />} />
        </Routes>
    </div>
  )
}

export default AllRouter