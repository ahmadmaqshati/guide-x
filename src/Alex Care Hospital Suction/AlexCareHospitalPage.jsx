import NavBar from "../home suction/NavBar"
import HeaderGreenBackground2 from "./HeaderGreenBackground2"
import Details from "./Details"
import Location from "./Location"
import Footer from "../home suction/Footer"

export default function AlexCareHospitalPage() {

    return (
        <div>
            <NavBar />

            <div style={{}}>
                <HeaderGreenBackground2 img='imges/test.png' Title='imges/Alex.png' />
            </div>
            <Details LocationImg='imges/location.png' LocationParagraph='455 West Orchard  Street Kings Mountain' PhoneImg='imges/Phone.png' PhoneParagraph='+088(246)642-27-10' BookImg='' BookParagraph='' />
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                <Location />
            </div>

            <Footer />


        </div>
        /* imges/location.png */



    )





}