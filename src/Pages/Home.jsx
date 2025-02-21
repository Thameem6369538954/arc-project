import React from 'react'
import Header from '../Components/Header'
import Whyfertility from '../Components/Whyfertility'
import NumberRolling from '../Components/NumberRolling'
import IVFSection from '../Components/Ivfsection'

const Home = () => {
  return (
    <div >
        <Header />
        <IVFSection />
        <NumberRolling />
        <Whyfertility />
    </div>
  )
}

export default Home