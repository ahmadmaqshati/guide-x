import Clinics from "./Clinics"
/* import Clinics2 from "./Clinics2" */
import { ClinicData } from "./ClinicData"
export default function OrthopedicSurgery() {

    const X = ClinicData.map(function (e) {
        return (
            <Clinics DrImg={e.DrImg} DrName={e.DrName} specialization={e.specialization} place={e.place} arrow={e.arrow} key={e.id} compo={e.compo} />
        )
    })

    return (
        <div>
            {/* <Clinics2 /> */}
            {X}




        </div>

    )
}