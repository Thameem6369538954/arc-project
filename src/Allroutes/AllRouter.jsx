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
import InternationalPatients from "../Pages/InternationalPatients.jsx"
import Pgprogrammes from "../Pages/Pgprogrammes.jsx"

{/* treatpage */}
import Meditation_Can_Help_You_Regain_Fertility from "../TreatPages/Meditation_Can_Help_You_Regain_Fertility.jsx"
import Intrauterine_Insemination from "../TreatPages/Intrauterine_Insemination.jsx"
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


      // newpages

import FertilityProcedures from "../Newpages/FertilityProcedures.jsx"      
import AdvancedRejuvenativeTherapy from "../Newpages/AdvancedRejuvenativeTherapy.jsx"      
import ARTProcedures from "../Newpages/ARTProcedures.jsx"      
import Obstetrics from "../Newpages/Obstetrics.jsx" 


// service pages

import TimingandFrequencyOfIntercourse from "../Servicespage/TimingandFrequencyOfIntercourse.jsx"
import Exercise_in_Moderation from "../Servicespage/Exercise_in_Moderation.jsx"
import Alcoholanddrug from "../Servicespage/Alcoholanddrug.jsx"
import BMIandfertility from "../Servicespage/BMIandfertility.jsx"
import NutritionandFertility from "../Servicespage/NutritionandFertility.jsx"
import Yoga from "../Servicespage/Yoga.jsx"
import MassageTherapy from "../Servicespage/MassageTherapy.jsx"
import Medication from "../Servicespage/Medication.jsx"
import Acupuncture from "../Servicespage/Acupuncture.jsx"
import Walking_Hiking from "../Servicespage/Walking_Hiking.jsx"
import EmotionalConsiderations from "../Servicespage/EmotionalConsiderations.jsx"
import PremaritalCounseling from "../Servicespage/PremaritalCounseling.jsx"
import FertilityAssessment from "../Servicespage/FertilityAssessment.jsx"
import GynecologicalConditions from "../Servicespage/GynecologicalConditions.jsx"
import MonthlyOvulationCycle from "../Servicespage/MonthlyOvulationCycle.jsx"
import CorporateSocialResponsibility from "../Servicespage/CorporateSocialResponsibility.jsx"
import Male_Sexual_Dysfunction from "../Servicespage/Male_Sexual_Dysfunction.jsx"
import FemaleSexualDysfunction from "../Servicespage/FemaleSexualDysfunction.jsx"
import Surgeries_in_Sexual_Disorders from "../Servicespage/Surgeries_in_Sexual_Disorders.jsx"
import Medications_for_Sexual_Dysfunction from "../Servicespage/Medications_for_Sexual_Dysfunction.jsx"
import Sexual_Hygiene from "../Servicespage/Sexual_Hygiene.jsx"
import Erectile_Dysfunction from "../Servicespage/Erectile_Dysfunction.jsx"
import Ejaculatory_Failures from "../Servicespage/Ejaculatory_Failures.jsx"
import Decreased_Sexual_Desire from "../Servicespage/Decreased_Sexual_Desire.jsx"
import Drug_Induced_Sexual_Dysfunction from "../Servicespage/Drug_Induced_Sexual_Dysfunction.jsx"
import Sex_Related_Diseases from "../Servicespage/Sex_Related_Diseases.jsx"
import Colposcopy from "../Servicespage/Colposcopy.jsx"
import Cryosurgery from "../Servicespage/Cryosurgery.jsx"
import Leep from "../Servicespage/Leep.jsx"
import Hysteroscopy from "../Servicespage/Hysteroscopy.jsx"
import PelvicLaparoscopy from "../Servicespage/PelvicLaparoscopy.jsx"
import Dilation_and_Curretage from "../Servicespage/Dilation_and_Curretage.jsx"
import Sperm_Semen from "../Servicespage/Sperm_Semen.jsx"
import Egg_Oocyte_Embryo from "../Servicespage/Egg_Oocyte_Embryo.jsx"
const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ARTProcedures' element={<ARTProcedures />} />
            <Route path='/Services_and_Treatment' element={<Services_and_Treatment />} />
            <Route path='/FertilityProcedures' element={<FertilityProcedures />} />
            <Route path='/About_arc' element={<About_arc />} />
            <Route path='/InternationalPatients' element={<InternationalPatients />} />
            <Route path='/Pgprogrammes' element={<Pgprogrammes />} />
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
            <Route path="/LocationDetails/:name" element={<LocationDetails />} />
            <Route path="/EggFreezing" element={<EggFreezing />} />
            <Route path="/Obstetrics" element={<Obstetrics />} />
            
            {/* treatpage */}
            
            <Route path="/Meditation_Can_Help_You_Regain_Fertility" element={<Meditation_Can_Help_You_Regain_Fertility />} />
            <Route path="/Intrauterine_Insemination" element={<Intrauterine_Insemination />} />
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
        <Route path="/AdvancedRejuvenativeTherapy" element={<AdvancedRejuvenativeTherapy />} />
        <Route path="/TimingandFrequencyOfIntercourse" element={<TimingandFrequencyOfIntercourse />} />
        <Route path="/Exercise_in_Moderation" element={<Exercise_in_Moderation />} />
        <Route path="/BMIandfertility" element={<BMIandfertility />} />
        <Route path="/Alcoholanddrug" element={<Alcoholanddrug />} />
        <Route path="/Yoga" element={<Yoga />} />
        <Route path="/NutritionandFertility" element={<NutritionandFertility />} />
        <Route path="/MassageTherapy" element={<MassageTherapy />} />
          <Route path="/Medication" element={<Medication />} />
          <Route path="/Acupuncture" element={<Acupuncture />} />
          <Route path="/Walking_Hiking" element={<Walking_Hiking />} />
          <Route path="/EmotionalConsiderations" element={<EmotionalConsiderations />} />
          <Route path="/PremaritalCounseling" element={<PremaritalCounseling />} />
          <Route path="/FertilityAssessment" element={<FertilityAssessment />} />
          <Route path="/GynecologicalConditions" element={<GynecologicalConditions />} />
          <Route path="/MonthlyOvulationCycle" element={<MonthlyOvulationCycle />} />
          <Route path="/CorporateSocialResponsibility" element={<CorporateSocialResponsibility />} />
          <Route path="/Male_Sexual_Dysfunction" element={<Male_Sexual_Dysfunction />} />
          <Route path="/FemaleSexualDysfunction" element={<FemaleSexualDysfunction />} />
          <Route path="/Surgeries_in_Sexual_Disorders" element={<Surgeries_in_Sexual_Disorders />} />
          <Route path="/Medications_for_Sexual_Dysfunction" element={<Medications_for_Sexual_Dysfunction />} />
          <Route path="/Sexual_Hygiene" element={<Sexual_Hygiene />} />
          <Route path="/Erectile_Dysfunction" element={<Erectile_Dysfunction />} />
          <Route path="/Ejaculatory_Failures" element={<Ejaculatory_Failures />} />
          <Route path="/Decreased_Sexual_Desire" element={<Decreased_Sexual_Desire />} />
          <Route path="/Drug_Induced_Sexual_Dysfunction" element={<Drug_Induced_Sexual_Dysfunction />} />
          <Route path="/Sex_Related_Diseases" element={<Sex_Related_Diseases />} />
          <Route path="/Colposcopy" element={<Colposcopy />} />
          <Route path="/Cryosurgery" element={<Cryosurgery />} />
          <Route path="/Leep" element={<Leep />} />
          <Route path="/Hysteroscopy" element={<Hysteroscopy />} />
          <Route path="/PelvicLaparoscopy" element={<PelvicLaparoscopy />} />
          <Route path="/Dilation_and_Curretage" element={<Dilation_and_Curretage />} />
          <Route path="/Sperm_Semen" element={<Sperm_Semen />} />
          <Route path="/Egg_Oocyte_Embryo" element={<Egg_Oocyte_Embryo />} />
        </Routes>
    </div>
  )
}

export default AllRouter