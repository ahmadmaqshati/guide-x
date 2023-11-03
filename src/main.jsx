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
import DrDetailsPage from './Dr.Ahmed Attalla/DrDetailsPage'
import Jobs1Page from './Jobs1 Section/Jobs1Page'
import Jobs2Page from './Jobs2 Section/Jobs2Page'
/* import pharmaciesPage from './Pharmacies Section/PharmaciesPage' */
import PharmaciesPage from './Pharmacies Section/PharmaciesPage'
import ElzabyPage from './Elzaby Suction/ElzabyPage'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/membership' element={<MembersPage />} />
        <Route path='/guide' element={<GuidePage />} />
        <Route path='/hospitals' element={<HospitalsPage />} />
        <Route path='/alexcarehospital' element={<AlexCareHospitalPage />} />
        <Route path='/clinic' element={<Clinic />} />
        <Route path='/orthopedicsurgery' element={<OrthopedicSurgery />} />
        <Route path='/drdetailspage' element={<DrDetailsPage />} />
        <Route path='/jobs1Page' element={<Jobs1Page />} />
        <Route path='/jobs2Page' element={<Jobs2Page />} />
        <Route path='/pharmaciespage' element={<PharmaciesPage />} />
        <Route path='/elzabypage' element={<ElzabyPage />} />




      </Routes>
    </BrowserRouter>

  </React.StrictMode >
)
