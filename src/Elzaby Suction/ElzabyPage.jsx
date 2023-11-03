import HeaderGreenBackground from "../About Suction/HeaderGreenBackground";
import NavBar from "../home suction/NavBar";
import Location from "../Alex Care Hospital Suction/Location";
import Footer from "../home suction/Footer";
import BookPhoneMapDetails from "../Alex Care Hospital Suction/BookPhoneMapDetails";


export default function ElzabyPage() {
    return (
        <div>
            <NavBar />
            <HeaderGreenBackground img='/imges/ElazabyIcon.png' />
            <BookPhoneMapDetails title='Hospitals Details' LocationImg='/imges/GreenMap.png' LocationParagraph='455 West Orchard  Street Kings Mountain' PhoneImg='/imges/GreenPhone.png' PhoneParagraph='+088(246)642-27-10' /* BookImg='/imges/GreenAdderessBook.png' BookParagraph='ggghghghghghg' */ />

            <div style={{ marginBottom: '15px' }}>
                <Location />
            </div>

            <img style={{ display: 'block', margin: '0 auto', marginBottom: '40px' }} src="imges/Discount.png" alt="" />


            <Footer />

        </div>
    )
}
