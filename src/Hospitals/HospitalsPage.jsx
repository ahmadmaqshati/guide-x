import NavBar from "../home suction/NavBar";
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground";
import Button from "../home suction/Button";
import Inputs from "../home suction/Inputs";
/* import Services from "../home suction/Services";*/
import Smouha from "./Smouha";
import Footer from "../home suction/Footer";
import { Link } from "react-router-dom";

export default function HospitalsPage() {
    return (
        <div>
            <NavBar />
            <div style={{ marginBottom: '25px' }}>
                <HeaderGreenBackground img='/imges/Liver.png' />
            </div>{/* imges/Hospital.png */}
            <Inputs />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '20px' }}>
                <Button btnName="Search" />
            </div>
            <div style={{ display: 'flex', width: '90%', margin: '0 auto', gap: '13px', alignItems: 'center', paddingTop: '26px', paddingBottom: '28px' }}>
                <div>
                    <Link to='/hospitals/z'>
                        <Smouha img='imges/Smouha.png' img2="imges/GreenLenear.png" title='Smouha' />
                    </Link>

                    <Smouha img='imges/Smouha.png' img2="imges/GreenLenear.png" title='Smouha' />
                    <Smouha img='imges/Smouha.png' img2="imges/GreenLenear.png" title='Smouha' />
                    <Smouha img='imges/Smouha.png' img2="imges/GreenLenear.png" title='Smouha' />
                </div>
                <div>
                    <Smouha img='imges/Smouha.png' img2="imges/GreenLenear.png" title='Smouha' />
                    <Smouha img='imges/Smouha.png' img2="imges/GreenLenear.png" title='Smouha' />
                    <Smouha img='imges/Smouha.png' img2="imges/GreenLenear.png" title='Smouha' />
                    <Smouha img='imges/Smouha.png' img2="imges/GreenLenear.png" title='Smouha' />
                </div>

            </div>
            <Footer />




        </div >
    )
}