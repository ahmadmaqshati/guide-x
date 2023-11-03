import NavBar from "../home suction/NavBar";
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground";
import Button from "../home suction/Button";
import SearchAndFilters from "../home suction/SearchAndFilters";
/* import Services from "../home suction/Services";*/
import Smouha from "./Smouha";
import Footer from "../home suction/Footer";
import { Link } from "react-router-dom";

const Hospitals = [
  { link: '/hospitals/smouha_1', title: 'Smouha 1', img: '/imges/Smouha.png' },
  { link: '/hospitals/smouha_2', title: 'Smouha 2', img: '/imges/Smouha.png' },
  { link: '/hospitals/smouha_2', title: 'Smouha 2', img: '/imges/Smouha.png' },
  { link: '/hospitals/smouha_2', title: 'Smouha 2', img: '/imges/Smouha.png' },
  { link: '/hospitals/smouha_2', title: 'Smouha 2', img: '/imges/Smouha.png' },
  { link: '/hospitals/smouha_2', title: 'Smouha 2', img: '/imges/Smouha.png' },
  { link: '/hospitals/smouha_2', title: 'Smouha 2', img: '/imges/Smouha.png' },
  { link: '/hospitals/smouha_2', title: 'Smouha 2', img: '/imges/Smouha.png' },
];

export default function HospitalsPage() {
    return (
        <div>
            <NavBar />
            <div style={{ marginBottom: '25px' }}>
                <HeaderGreenBackground img='/imges/Hospital.png' />
            </div>{/* imges/Hospital.png */}
            <SearchAndFilters />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '20px' }}>
                <Button btnName="Search" />
            </div>
            <div style={{ display: 'flex', width: '90%', margin: '0 auto', gap: '13px', alignItems: 'center', paddingTop: '26px', paddingBottom: '28px', flexWrap: 'wrap' }}>
                  {Hospitals.map((hospital) => (
                    <Link to={hospital.link} key={hospital.link}>
                        <Smouha img={hospital.img} img2="imges/GreenLenear.png" title={hospital.title}/>
                    </Link>
                    ))}
            </div>
            <Footer />




        </div >
    )
}
