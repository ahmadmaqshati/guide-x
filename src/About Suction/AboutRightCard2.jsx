/* right */
import AboutLeftCard from "./AboutLeftCard"
export default function AboutRightCard2() {
    return (
        <div>
            <AboutLeftCard />

            <div style={{ position: 'relative', top: '65px' }}>

                <div style={{ backgroundImage: `url(imges/About2.svg)`, height: '189px', backgroundRepeat: 'no-repeat', marginBottom: '106px', marginLeft: '90px' }}>

                    <div style={{ background: 'rgb(255, 255, 255,0.5)', width: '91%', position: 'absolute', left: '0', top: '64px', padding: '26px 0px 23px 25px' }} >
                        <h1 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '10px', color: '#14364D' }}>Our Vision</h1>
                        <p style={{ width: '95%', fontSize: '13.8px', color: '#323641' }}>In our desire to reduce the burden of the costs of health care services for the individual.and improving and developing the services needed by medical institutions of all types </p>
                    </div>

                </div>
            </div>



        </div >
    )
}