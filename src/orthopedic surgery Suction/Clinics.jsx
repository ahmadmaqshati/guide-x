

export default function Clinics(props) {
    return (
        <div>
            <div style={{ /* display: 'flex', alignItems: 'center' */border: '1px solid #EFEFF5', width: '90%', margin: '0 auto', borderRadius: '10px',/*  paddingBottom: '77px' */height: '123px', position: 'relative', paddingTop: '11px', marginBottom: '14px' }}>
                <img src={props.DrImg}/* "imges/Dr.png" */ alt="" style={{ paddingLeft: '18px', paddingTop: '3px' }} />
                <div style={{ position: 'absolute', bottom: '13px', right: '75px' }}>
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: "600", marginBottom: '7px' }}>{props.DrName}{/* Dr.Ahmed Attalla */}</h3>
                        <p style={{ color: '#A1A3A8', fontSize: "0.7rem", marginBottom: '20px' }}>{props.specialization}{/* Orthopedic consultants */}</p>
                    </div>

                    <div style={{ display: 'flex' }}>
                        {props.compo}
                        {/* <  /> */}{/* NastedComponant */} {/* GreenMapIcon */}
                        <h5 style={{ fontWeight: '500', fontSize: '0.8rem', color: '#15171B' }}>{props.place}{/* 455 West Orchard Street */}</h5>
                    </div>

                </div>
                <img style={{ float: 'right', paddingTop: '42px', paddingRight: '20px' }} src={props.arrow}/* "imges/Arrow.png" */ alt="" />
            </div>


            <div style={{ /* display: 'flex', alignItems: 'center' */border: '1px solid #EFEFF5', width: '90%', margin: '0 auto', borderRadius: '10px',/*  paddingBottom: '77px' */height: '123px', position: 'relative', paddingTop: '11px', marginBottom: '14px' }}>
                <div style={{ position: 'relative', border: '0px solid', borderRadius: '50%', width: '40px', height: '40px', marginLeft: '18px', marginTop: '3px', background: '#E9F5F2' }}>
                    <div style={{ border: '1px solid #249C7F', borderRadius: '50%', width: '10px', height: '10px', position: 'absolute', top: '9px', left: '15px' }}></div>

                    <img style={{ position: 'absolute', top: '21px', left: '10px' }} src={props.Radius} alt="" />
                </div>

                <div style={{ position: 'absolute', bottom: '13px', right: '75px' }}>
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: "600", marginBottom: '7px' }}>{props.DrName}{/* Dr.Ahmed Attalla */}</h3>
                        <p style={{ color: '#A1A3A8', fontSize: "0.7rem", marginBottom: '20px' }}>{props.specialization}{/* Orthopedic consultants */}</p>
                    </div>

                    <div style={{ display: 'flex' }}>
                        {props.compo}
                        {/* <  /> */}{/* NastedComponant */} {/* GreenMapIcon */}
                        <h5 style={{ fontWeight: '500', fontSize: '0.8rem', color: '#15171B' }}>{props.place}{/* 455 West Orchard Street */}</h5>
                    </div>

                </div>
                <img style={{ float: 'right', paddingTop: '42px', paddingRight: '20px' }} src={props.arrow}/* "imges/Arrow.png" */ alt="" />
            </div>






        </div>

    )
}
/*  */