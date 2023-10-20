import Guide from "./Guide"
import ShowTheHospitalLogo from "./ShowTheHospitalLogo"

export default function Background(props) {
    return (
        <div style={{ backgroundImage: "url('imges/background.png')", height: '274px', marginTop: '40px', marginBottom: '43px', overflow: 'auto ' }}>

            {/* reuseing Guide Componant into Background Componant */}
            <div style={{ color: '#FCFCFC', fontWeight: '600', width: '91%', margin: '0 auto', position: 'relative', top: '44px' }}>
                <Guide groupName='Our Clients' />
            </div>

            {/* Nasted-Componant : ShowTheHospitalLogo Componant Calling 
               into Background Componant   */}
            <div style={{ display: 'flex', width: '90%', margin: '0 auto', gap: '16px', alignItems: 'center', paddingTop: '26px' }}>
                <ShowTheHospitalLogo img='imges/Smouha.png' />
                <ShowTheHospitalLogo img='imges/Smouha.png' />
                <ShowTheHospitalLogo img='imges/Smouha.png' />
                <ShowTheHospitalLogo img='imges/Smouha.png' />
                <ShowTheHospitalLogo img='imges/Smouha.png' />

            </div>

        </div>


    )
}
