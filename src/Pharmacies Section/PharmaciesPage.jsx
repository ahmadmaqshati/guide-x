import NavBar from "../home suction/NavBar"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import Footer from "../home suction/Footer"
import SearchAndFilters from "../home suction/SearchAndFilters";
import Button from "../home suction/Button";
import ElzabyImgesDisplay from "./ElzabyImgesDisplay";
import { Link } from "react-router-dom";


export default function PharmaciesPage() {

    return (
        <div>
            <NavBar />
            <div style={{ marginBottom: '25px' }}>
                <HeaderGreenBackground img='/imges/Phamacies.png' />
            </div>
            <SearchAndFilters />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>
                <Button btnName="Search" />
            </div>
            <div style={{ width: '91%', margin: '0 auto', marginBottom: '40px' }}>
                <Link to="/pharmacies/pharmacy_1">
                  <ElzabyImgesDisplay />
                </Link>
                <Link to="/pharmacies/pharmacy_2">
                  <ElzabyImgesDisplay />
                </Link>
                <Link to="/pharmacies/pharmacy_3">
                  <ElzabyImgesDisplay />
                </Link>
                <Link to="/pharmacies/pharmacy_4">
                  <ElzabyImgesDisplay />
                </Link>
                <Link to="/pharmacies/pharmacy_5">
                  <ElzabyImgesDisplay />
                </Link>

            </div>
            <Footer />

        </div>
    )
}
