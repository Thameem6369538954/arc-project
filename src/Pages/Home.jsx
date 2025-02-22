import React from 'react'
import Header from '../Components/Header'
import Whyfertility from '../Components/Whyfertility'
import NumberRolling from '../Components/NumberRolling'
import IVFSection from '../Components/Ivfsection'
import OurServices from '../Components/OurServices'
import HeaderA from '../Components/HeaderA'
import VitroFertilization from '../Components/VitroFertilization'

const Home = () => {
  return (
    <div >
        {/* <Header /> */}
        <HeaderA />
        <IVFSection />
        {/* <NumberRolling /> */}
        <VitroFertilization />
        <OurServices />
        {/* <Whyfertility /> */}
    </div>
  )
}

export default Home