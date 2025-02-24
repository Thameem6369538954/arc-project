import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../Pages/Home"
import Services_and_Treatment from "../Components/Services_and_Treatment"

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Services_and_Treatment' element={<Services_and_Treatment />} />
        </Routes>
    </div>
  )
}

export default AllRouter