import NavBar from "../home suction/NavBar"
import Button from "../home suction/Button"
import SpecializationItems from "./SpecializationItems"
import SpecializationCategory from "../home suction/SpecializationCategory"
import Footer from "../home suction/Footer"
import { dataItem } from "./dataItem"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import Inputs from "../home suction/Inputs";

export default function Clinic() {
    const showDataItem = dataItem.map(function (e) {
        return (< SpecializationItems img={e.img} title={e.title} img2={e.img2} title2={e.title2} key={e.id} />)

    })

    return (
        <div>


            <NavBar />
            <div style={{ marginBottom: '25px' }}>
                <HeaderGreenBackground img='imges/Clinic.png' />
            </div>

            <Inputs />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '38px' }}>
                <Button btnName="Search" />
            </div>

            <div style={{ width: '90%', margin: '0 auto' }}>
                <SpecializationCategory groupName='Specialization' />
            </div>

            <div style={{ width: '90%', margin: '0 auto' }}>

                {showDataItem}

            </div>

            <Footer />


        </div>
    )
}