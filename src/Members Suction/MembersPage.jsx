import NavBar from "../home suction/NavBar"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import Button from "../home suction/Button"
import Footer from "../home suction/Footer"
export default function MembersPage() {
    return (
        <div>
            <NavBar />
            <HeaderGreenBackground img='imges/Members.png' />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>
                <Button btnName="Send" />
            </div>
            <Footer />




        </div>
    )
}