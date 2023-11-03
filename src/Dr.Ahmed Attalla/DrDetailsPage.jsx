import NavBar from "../home suction/NavBar";
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground";
import BookPhoneMapDetails from "../Alex Care Hospital Suction/BookPhoneMapDetails";
import Location from "../Alex Care Hospital Suction/Location";
import DiscountsImg from "./DiscountsImg";
import Footer from "../home suction/Footer";

export default function DrDetailsPage() {
    return (
        <div>
            <NavBar />
            <HeaderGreenBackground img='imges/DrAhmad.png' />
            <BookPhoneMapDetails LocationImg='imges/GreenMap.png' LocationParagraph='455 West Orchard  Street Kings Mountain' PhoneImg='imges/GreenPhone.png' PhoneParagraph='+088(246)642-27-10' BookImg='imges/GreenAdderessBook.png' BookParagraph='Consultant in spine,endoscopic and dedormity surgeries.Teacher of Orthopedics and Spine Surgery Lecturer,Faculty of Medicine Alexandria University ' title='Clinic Details' />

            <div style={{ paddingBottom: '15px' }}>
                <Location />
            </div>

            <div style={{ paddingBottom: '40px' }}>
                <DiscountsImg />
            </div>
            <Footer />




        </div >
    )

}