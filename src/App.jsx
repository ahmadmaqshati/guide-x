/*
 =========
 table of contents:
 1-home 2-about us & contact 3-membership 4-jobs 5-guide
 ========= 
  */
import HealthImgeDiscr from './home suction/HealthImgeDiscr'
import HealthImge from './home suction/HealthImge'
import NavBar from './home suction/NavBar'
import Button from './home suction/Button'
/* import Guidances from './Guidances' */
import Guidances from './home suction/Guidances'
import { GuidData } from './home suction/GuidData'
import Guide from './home suction/Guide'
import Services from './home suction/Services'
import { ServicesData } from './home suction/ServicesData'
/* import ShowTheHospitalLogo from './ShowTheHospitalLogo' */
import Background from './home suction/Background'
import Footer from './home suction/Footer'
import AboutUsNavBar from './About Suction/AboutUsNavBar'
import AboutUsbackground from './About Suction/AboutUsbackground'
import AboutUsExplain from './About Suction/AboutUsExplain'
import './home suction/Services.css'
import AboutBackGround from './About Suction/AboutBackGround'



function App() {
  /*
  ==================================
  bring data for Guidances Componant
  ================================== 
  */
  const GuidDataShow = GuidData.map((e) =>
    <Guidances numb={e.numb} guideName={e.guideName} guideImg={e.guideImg} key={e.id} />
  )
  /*
   ==================================
   bring data for Services Componant 
   ==================================
   */
  const servicesDataaMapping = ServicesData.map((e) => <Services img={e.img} serviceType={e.serviceType} key={e.id} />)




  return (

    < div className='App' >{/* App */}
      {/*--------------------------------home suction----------------------------------*/}
      <div>
        <NavBar /> {/*NavBard-componant-calling*/}
      </div>

      <HealthImge /> {/* HealthImge-componant-calling */}

      <div style={{ width: '90%', margin: '0 auto' }}>
        <HealthImgeDiscr /> {/*HealthImgeDiscr-componant-calling*/}
        <Button btnName="Search" /> {/*Button-componant-calling*/}
        <Guide groupName='Guide' />
      </div>


      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px', flexWrap: 'wrap', width: '91%', margin: '0 auto'

      }}>

        {/* //////////////////////data calling by props //////////////*/}
        {/* <Guidances numb='13' guideName='Hospital' guideImg='imges/Ambulance.png' />
        <Guidances numb='15' guideName='Hospital' guideImg='imges/Ambulance.png' />
        <Guidances numb='18' guideName='Hospital' guideImg='imges/Ambulance.png' />
        <Guidances numb='19' guideName='Hospital' guideImg='imges/Ambulance.png' />
        <Guidances numb='13' guideName='Hospital' guideImg='imges/Ambulance.png' />
        <Guidances numb='13' guideName='Hospital' guideImg='imges/Ambulance.png' /> */}

        {/*////////////////////////data calling by mapping ///////////////////////*/}
        {GuidDataShow}

      </div>
      <div>
        <Background />
      </div>

      <div style={{
        width: '90%', margin: '0 auto', color: '#14364D'
      }}>
        <Guide groupName='Our Services' />
        {servicesDataaMapping}
      </div>
      <Footer />
      {/* ///////////////////////////////home suction//////////////////////////////////*/}

      {/* --------------------------------About suction----------------------------------*/}
      <AboutUsNavBar />
      <AboutUsbackground />
      <AboutUsExplain />
      <AboutBackGround />
      {/* ///////////////////////////////About suction//////////////////////////////////*/}




    </div >/*///App///*/

  )


}

export default App

