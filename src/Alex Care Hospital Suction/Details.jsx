
export default function Details(props) {
    return (
        <div style={{ width: '90%', margin: '0 auto' }}>
            <h4>{props.title}</h4>
            <br />
            {/*-------------------------------AddressBooks-Item----------------------*/}
            <div style={{ display: 'flex', gap: '11px', paddingBottom: '20px' }}>
                <div style={{ border: '0px solid #249C7F', height: '32px', minWidth: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', background: '#E9F5F2' }}>
                    <img src={props.BookImg} style={{ width: '15.4px', height: '15.33px' }} alt="" />

                </div>
                <p style={{ fontSize: '0.8rem', paddingTop: '4px', color: '#15171B', fontWeight: '500' }}>{props.BookParagraph}</p>
            </div>

            {/*----------------------------------- Map-Item---------------------- */}
            <div style={{ display: 'flex', gap: '11px', paddingBottom: '20px' }}>
                <div style={{ border: '0px solid #249C7F', height: '32px', width: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', background: '#E9F5F2' }}>
                    <img src={props.LocationImg} style={{ width: '22.97px', height: '24.33px' }} alt="" />

                </div>
                <p style={{ fontSize: '0.8rem', paddingTop: '4px', color: '#15171B', fontWeight: '500' }}>{props.LocationParagraph}</p>
            </div>

            {/*----------------------------------- Phone-Item---------------------- */}
            <div style={{ display: 'flex', gap: '11px', paddingBottom: '20px' }}>
                <div style={{ border: '0px solid #249C7F', height: '32px', width: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', background: '#E9F5F2' }}>
                    <img src={props.PhoneImg} style={{ width: '15.3px', height: '15.33px' }} alt="" />

                </div>
                <p style={{ fontSize: '0.8rem', paddingTop: '4px', color: '#15171B', fontWeight: '500' }}>{props.PhoneParagraph}</p>
            </div>

            {/* +088(246)642-27-10 */}


            {/* Consultant in spine,endoscopic and dedormity surgeries.Teacher of Orthopedics and Spine Surgery Lecturer,Faculty of Medicine Alexandria University */}
            {/* Hospital Details */}
            {/* imges/location.png */}
            {/* 455 West Orchard  Street Kings Mountain  */}
            {/* imges/Phone.png */}

            {/* imges/AddressBooks.png */}



        </div>
    )
}
{/* <span style={{ border: '1px solid # ', height: '4.67px', width: '4.66px', borderRadius: '50%', position: 'absolute' }}></span> */ }