import NavBar from "../home suction/NavBar";
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground";
import Button from "../home suction/Button";
/* import ServicesCards from "../home suction/ServicesCards"; */
import ServicesList from "../home suction/ServicesList";
import SearchAndFilters from "../home suction/SearchAndFilters";


import Footer from "../home suction/Footer";

export default function GuidePage() {
    const GuidePageData = [
        {
            id: 1,
            img: '/imges/Hospitals.jpg',
            serviceType: 'Hospitals'
        },
        {
            id: 2,
            img: '/imges/Clinics.webp',
            serviceType: 'Clinics'
        },
        {
            id: 3,
            img: '/imges/Pharmacy.jpeg',
            serviceType: 'Pharmacies'
        },
        {
            id: 4,
            img: '/imges/Medical.jpg',
            serviceType: 'Medical Supplies'
        },

        {
            id: 5,
            img: '/imges/Specialized Center.jpg',
            serviceType: 'Specialized centers'
        },

        {
            id: 6,
            img: '/imges/Home_Care.webp',
            serviceType: 'Home Care'
        },
    ]


    return (
        <div>
            <NavBar />
            <div style={{ marginBottom: '25px' }}>
                <HeaderGreenBackground img='/imges/GuideImg.png' />
            </div>

            <SearchAndFilters />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>
                <Button btnName="Search" />
            </div>


            <div style={{
                width: '100%', margin: '0 auto', color: '#14364D'
            }}>
                <ServicesList services={GuidePageData} />

            </div>
            <Footer />


        </div>
    )
}
