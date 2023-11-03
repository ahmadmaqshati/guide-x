import { Link } from "react-router-dom";


export default function DrCard(props) {
    return (
    <Link to={props.link} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div>
            <div style={{ border: '1px solid #EFEFF5', borderRadius: '10px', height: '123px', position: 'relative', paddingTop: '11px', marginBottom: '14px' }}>
                <img src={props.DrImg}/* "imges/Dr.png" */ alt="" style={{ paddingLeft: '18px', paddingTop: '10px' }} />
                <div style={{ position: 'absolute', bottom: '13px', right: '90px' }}>
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: "600", marginBottom: '7px' }}>{props.DrName}{/* Dr.Ahmed Attalla */}</h3>
                        <p style={{ color: '#A1A3A8', fontSize: "0.7rem", marginBottom: '20px' }}>{props.specialization}{/* Orthopedic consultants */}</p>
                    </div>

                    <div style={{ display: 'flex', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src={props.map} alt="" />
                        {/* <  /> */}{/* NastedComponant */} {/* GreenMapIcon */}
                        <h5 style={{ fontWeight: '500', fontSize: '0.8rem', color: '#15171B' }}>{props.place}{/* 455 West Orchard Street */}</h5>
                    </div>

                </div>
                <img style={{ float: 'right', paddingTop: '42px', paddingRight: '20px' }} src={props.arrow}/* "imges/Arrow.png" */ alt="" />
            </div>




        </div>
        </Link>
    )
}
/*  */
