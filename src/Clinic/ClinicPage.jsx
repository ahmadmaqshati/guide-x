   /* < SpecializationItems img = { e.img } title = { e.title } /> */import NavBar from "../home suction/NavBar"
import Button from "../home suction/Button"
import SpecializationItems from "./SpecializationItems"
import SpecializationCategory from "../home suction/SpecializationCategory"
import Footer from "../home suction/Footer"
import { dataItem } from "./dataItem"

export default function Clinic() {
    const showDataItem = dataItem.map(function (e) {
        return (< SpecializationItems img={e.img} title={e.title} key={e.id} />)

    })


    return (
        <div>


            <NavBar />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '38px' }}>
                <Button btnName="Search" />


            </div>

            <div style={{ width: '90%', margin: '0 auto', /* paddingBottom: '23px' */ }}>
                <SpecializationCategory groupName='Specialization' />
            </div>
            <div style={{ width: '90%', margin: '0 auto' }}>
                {showDataItem}

            </div>

            <Footer />


        </div>
    )
}