import NavBar from "../home suction/NavBar"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import BookPhoneMapDetails from "./BookPhoneMapDetails"
import Location from "./Location"
import Footer from "../home suction/Footer"

export default function AlexCareHospitalPage() {

    return (
        <div>
            <NavBar />

            <div>
                <HeaderGreenBackground img='/imges/AlexCareHospital.png' />
            </div>
            <BookPhoneMapDetails /*title='Hospitals Details'*/ LocationImg='/imges/GreenMap.png' LocationParagraph='455 West Orchard  Street Kings Mountain' PhoneImg='/imges/GreenPhone.png' PhoneParagraph='+088(246)642-27-10' /* BookImg='/imges/GreenAdderessBook.png' BookParagraph='ggghghghghghg' */ />
            <div style={{ marginBottom: '50px' }}>
                <Location />
            </div>

            <Footer />


        </div>
        /* imges/location.png */



    )





}
