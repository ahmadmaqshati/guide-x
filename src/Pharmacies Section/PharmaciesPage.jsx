import NavBar from "../home suction/NavBar"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import Footer from "../home suction/Footer"
import Inputs from "../home suction/Inputs";
import Button from "../home suction/Button";
import ElzabyImgesDisplay from "./ElzabyImgesDisplay";


export default function PharmaciesPage() {

    return (
        <div>
            <NavBar />
            <div style={{ marginBottom: '25px' }}>
                <HeaderGreenBackground img='imges/Phamacies.png' />
            </div>
            <Inputs />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>
                <Button btnName="Search" />
            </div>
            <div style={{ width: '91%', margin: '0 auto', marginBottom: '40px' }}>
                <ElzabyImgesDisplay />
                <ElzabyImgesDisplay />
                <ElzabyImgesDisplay />
                <ElzabyImgesDisplay />


            </div>
            <Footer />

        </div>
    )
}