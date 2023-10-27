import React from 'react'

import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './About Suction/AboutPage'
import Home from './home suction/Home'
import ContactPage from './Contact Section/ContactPage'
import MembersPage from './Members Suction/MembersPage'
import GuidePage from './Guide Section/GuidePage'
import HospitalsPage from './Hospitals/HospitalsPage'
import AlexCareHospitalPage from './Alex Care Hospital Suction/AlexCareHospitalPage'
import Clinic from './Clinic/ClinicPage'
import OrthopedicSurgery from './orthopedic surgery Suction/OrthopedicSurgery'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/members' element={<MembersPage />} />
        <Route path='/guide' element={<GuidePage />} />
        <Route path='/hospitals' element={<HospitalsPage />} />
        <Route path='/alexcarehospital' element={<AlexCareHospitalPage />} />
        <Route path='/clinic' element={<Clinic />} />
        <Route path='/orthopedicsurgery' element={<OrthopedicSurgery />} />



      </Routes>
    </BrowserRouter>

  </React.StrictMode >
)
