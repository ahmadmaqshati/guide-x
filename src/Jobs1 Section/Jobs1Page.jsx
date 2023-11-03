import NavBar from "../home suction/NavBar";
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground";
import CustomerServices from "./CustomerServices";
import Footer from "../home suction/Footer";

export default function Jobs1Page() {
    return (
        <div>
            <NavBar />
            <HeaderGreenBackground img='/imges/Jops.png' />
            <div style={{ marginBottom: '35px' }}>
                <CustomerServices />
                <CustomerServices />
            </div>

            <Footer />





        </div>
    )
}