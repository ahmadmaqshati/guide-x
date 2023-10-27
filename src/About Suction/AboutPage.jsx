
import AboutNavBar from './AboutNavBar'
import HeaderGreenBackground from './HeaderGreenBackground'
import AboutText from './AboutText'
import CardsContainer from './CardsContainer'
import Guide from '../home suction/SpecializationCategory'
import Services from '../home suction/Services'
import { ServicesData } from '../home suction/ServicesData'
import Footer from '../home suction/Footer'
export default function AboutPage() {
    const servicesDataaMapping = ServicesData.map((e) => <Services img={e.img} serviceType={e.serviceType} key={e.id} />)
    return (

        <div>
            <AboutNavBar />
            <HeaderGreenBackground img='imges/About.png' />
            <AboutText />
            <CardsContainer />
            <div style={{
                width: '90%', margin: '0 auto', color: '#14364D'
            }}>
                <Guide groupName='Our Services' />
                {servicesDataaMapping}
            </div>
            <Footer />

        </div>
    )
} 