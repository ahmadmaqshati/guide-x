import NavBar from "../home suction/NavBar";
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground";
import Button from "../home suction/Button";
import Services from "../home suction/Services";

import Footer from "../home suction/Footer";

export default function GuidePage() {

    return (
        <div>
            <NavBar />
            <HeaderGreenBackground img='imges/Guidee.png' />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>
                <Button btnName="Search" />
            </div>

            <div style={{
                width: '90%', margin: '0 auto', color: '#14364D'
            }}>
                <Services img='imges/Hospitals.jpg' serviceType='Hospitals' />
                <Services img='imges/Clinics.webp' serviceType='Clinics' />
                <Services img='imges/Pharmacy.jpeg' serviceType='Pharmacies' />
                <Services img='imges/Medical.jpg' serviceType='Medical Supplies' />
                <Services img='imges/Specialized Center.jpg' serviceType='Specialized centers' />
                <Services img='imges/Home_Care.webp' serviceType='Home Care' />
            </div>
            <Footer />


        </div>
    )
}
