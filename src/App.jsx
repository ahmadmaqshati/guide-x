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
import Guidances from './Guidances'
import { GuidData } from './GuidData'
import Guide from './Guide'
import Services from './Services'
import { ServicesData } from './ServicesData'
/* import ShowTheHospitalLogo from './ShowTheHospitalLogo' */
import Background from './Background'
import Footer from './Footer'

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
  const servicesDataaMapping = ServicesData.map((e) => <Services img={e.img} discr={e.discr} key={e.id} />)




  return (
    /* --------------------------------home suction----------------------------------*/
    < div className='App' >
      <div style={{ width: '90%', margin: '0 auto' }}>
        <NavBar /> {/*NavBard-componant-calling*/}
      </div>

      <HealthImge /> {/* HealthImge-componant-calling */}

      <div style={{ width: '90%', margin: '0 auto' }}>
        <HealthImgeDiscr /> {/*HealthImgeDiscr-componant-calling*/}
        <Button btnName="Search" /> {/*Button-componant-calling*/}
        <Guide groupName='Guide' />
      </div>


      <div style={{
        display: 'flex'/* , justifyContent: 'space-between' */, alignItems: 'center', gap: '15px', flexWrap: 'wrap', width: '91%', margin: '0 auto'

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


    </div >
    /* ///////////////////////////////home suction//////////////////////////////////*/

  )
}

export default App





