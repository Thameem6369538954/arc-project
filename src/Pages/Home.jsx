import React from 'react'
import Header from '../Components/Header'
import Whyfertility from '../Components/Whyfertility'
import NumberRolling from '../Components/NumberRolling'
import IVFSection from '../Components/Ivfsection'
import OurServices from '../Components/OurServices'
import HeaderA from '../Components/HeaderA'
import VitroFertilization from '../Components/VitroFertilization'
import Team from '../Components/Team'
import ContactForm from '../Components/ContactForm'
import ScrollToTop from '../Components/ScrollToTop'
import FAQ from '../Components/Faq'
import Gallery from '../Components/Gallery'
import Dummy from "../Pages/Dummy.jsx"

const Home = () => {
  return (
    <div >
        {/* <Header /> */}
        <ScrollToTop />
        <HeaderA />
        <Whyfertility />
        {/* <NumberRolling /> */}
        <VitroFertilization />
        <Team />  
        {/* <Dummy /> */}
        <Gallery />
        <OurServices />
        <IVFSection />

        {/* <FAQ /> */}
        <ContactForm />

    </div>
  )
}

export default Home