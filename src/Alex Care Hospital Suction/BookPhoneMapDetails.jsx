
export default function BookPhoneMapDetails(props) {
    return (
        <div style={{ width: '90%', margin: '0 auto' }}>
            <h4 style={{ color: '#249C7F',/*  position: 'relative', top: '30px', */ fontSize: '0.9rem', fontWeight: '600', padding: '22px 0', }}>{props.title}</h4>

            {/*-------------------------------AddressBooks-Item----------------------*/}
      { props.BookImg && props.BookParagraph ?
            <div style={{ display: 'flex', gap: '11px', paddingBottom: '20px' }}>
                <div style={{ /*  borderRadius: '50%' , display: 'flex', justifyContent: 'center', alignItems: 'center',*/ position: 'relative' }}>
                    <img src={props.BookImg} alt="" />

                </div>
                <p style={{
                    fontSize: '0.76rem', lineHeight: '30px', paddingTop: '4px', color: '#15171B', fontWeight: '500'
                }}>{props.BookParagraph}</p>
            </div>
            : 
            null }

            {/*----------------------------------- Map-Item---------------------- */}
            <div style={{ display: 'flex', gap: '11px', paddingBottom: '20px' }}>
                <div style={{ border: '0px solid #249C7F', height: '32px', width: '32px',/* borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',*/ position: 'relative' }}>
                    <img src={props.LocationImg} alt="" />

                </div>
                <p style={{ fontSize: '0.8rem', paddingTop: '4px', color: '#15171B', fontWeight: '500' }}>{props.LocationParagraph}</p>
            </div>

            {/*----------------------------------- Phone-Item---------------------- */}
            <div style={{ display: 'flex', gap: '11px', paddingBottom: '20px' }}>
                <div style={{ border: '0px solid #249C7F', position: 'relative' }}>
                    <img src={props.PhoneImg} alt="" />

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
