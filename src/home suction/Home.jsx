/*
 =========
 table of contents:
 1-home 2-about us & contact 3-membership 4-jobs 5-guide
 ========= 
  */
import HealthImgeDiscr from './HealthImgeDiscr'
import HealthImge from './HealthImge'
import NavBar from './NavBar'
import Button from './Button'

import SearchAndFilters from './SearchAndFilters'

import CategoryCard from './Guidances'
import { GuidData } from './GuidData'
import SpecializationCategory from './SpecializationCategory'

/* import ServicesCards from './ServicesCards'  */
import ServicesList from './ServicesList'
import { ServicesData } from './ServicesData'
import Background from './Background'
import Footer from './Footer'
/* import AboutNavBar from './About Suction/AboutNavBar'
import AboutBackground from './About Suction/AboutBackground'
import AboutText from './About Suction/AboutText'
import './home suction/Services.css'
import CardsContainer from './About Suction/CardsContainer' */

/* import { Routes, Route } from 'react-router-dom' */




function Home() {
    /*
    ==================================
    bring data for Guidances Componant
    ================================== 
    */
    const GuidDataShow = GuidData.map((item) =>
        <CategoryCard {...item} key={item.id} />
    )
    /*
     ==================================
     bring data for Services Componant 
     ==================================
     */
    /*  const servicesDataShow = ServicesData.map((service) => <ServicesCards img={service.img} serviceType={service.serviceType} key={service.id} />)
  */

    return (
        < div className='App' >{/* App */}




            {/*============================homesuction=============================*/}
            <div>
                <NavBar /> {/*NavBard-componant-calling*/}
            </div>

            <HealthImge /> {/* HealthImge-componant-calling */}

            <div style={{ width: '90%', margin: '0 auto' }}>
                <HealthImgeDiscr /> {/*HealthImgeDiscr-componant-calling*/}
            </div>

            <SearchAndFilters />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '40px' }}>
                <Button btnName="Search" /> {/*Button-componant-calling*/}
            </div>

            <div style={{ width: '90%', margin: '0 auto' }}>
                <SpecializationCategory groupName='Guide' />{/* Specialization category=Guide */}
            </div>

            <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px', flexWrap: 'wrap', width: '91%', margin: '0 auto'
            }}>

                {/* //////////////////////data calling by props //////////////*/}
                {/* <Guidances numb='13' guideName='Hospital' guideImg='/imges/Ambulance.png' />
          <Guidances numb='15' guideName='Hospital' guideImg='/imges/Ambulance.png' />
          <Guidances numb='18' guideName='Hospital' guideImg='/imges/Ambulance.png' />
          <Guidances numb='19' guideName='Hospital' guideImg='/imges/Ambulance.png' />
          <Guidances numb='13' guideName='Hospital' guideImg='/imges/Ambulance.png' />
          <Guidances numb='13' guideName='Hospital' guideImg='/imges/Ambulance.png' /> */}

                {/*//////////gma//////////////data calling by mapping ///////////////////////*/}
                {GuidDataShow}

            </div>
            <div>
                <Background />
            </div>

            <div style={{
                width: '90%', margin: '0 auto', color: '#14364D'
            }}>
                <SpecializationCategory groupName='Our Services' />
                {/* {servicesDataShow} */}
                <ServicesList services={ServicesData} />
            </div>
            <Footer />
            {/* ///////////////////////////////homesuction//////////////////////////*/}


        </div >/*///App///*/

    )

}

export default Home
