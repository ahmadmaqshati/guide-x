import NavBarContact from "./NavBarContact"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import Button from "../home suction/Button"
import Footer from "../home suction/Footer"
export default function ContactPage() {
    return (
        <div>
            <NavBarContact />
            <HeaderGreenBackground img='imges/Contact.png' />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>
                <Button btnName="Send" />
            </div>
            <Footer />


        </div>
    )
}