import DrCard from "./Clinics"
import { ClinicData } from "./ClinicData"
import NavBar from "../home suction/NavBar"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import SpecializationCategory from "../home suction/SpecializationCategory"
import SearchAndFilters from "../home suction/SearchAndFilters";
import Button from "../home suction/Button"
import Footer from "../home suction/Footer"

export default function OrthopedicSurgery() {

    const clinicsDataShow = ClinicData.map(function (ClinicDataKey) {
        return (
            <DrCard link={ClinicDataKey.link} DrImg={ClinicDataKey.DrImg} DrName={ClinicDataKey.DrName} specialization={ClinicDataKey.specialization} place={ClinicDataKey.place} arrow={ClinicDataKey.arrow} key={ClinicDataKey.id} map={ClinicDataKey.map} />
        )
    })

    return (
        <div>
            <NavBar />
            <div style={{ marginBottom: '25px' }}>
                <HeaderGreenBackground img='/imges/OrthopidecSurgery.png' />
            </div>
            <SearchAndFilters />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '38px' }}>
                <Button btnName="Search" />
            </div>


            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '29px' }}>
                <SpecializationCategory groupName='Clinics' />
                {clinicsDataShow}
            </div>

            <Footer />



        </div>

    )
}
