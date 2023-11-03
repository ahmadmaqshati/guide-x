


export default function SpecializationItems(props) {
    return (

        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '17px', position: 'relative', bottom: '18px', paddingBottom: '17px'
        }}>

            <div style={{ border: '1px solid #EFEFF5', borderRadius: '15px', width: '48%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px 0', /* marginRight: '10px' */ }}>
                <img src={props.img} alt="" style={{ paddingBottom: '10px' }} />
                <p style={{ color: '#0D2416', fontSize: '0.8rem' }}>{props.title}</p>

            </div>

            <div style={{ border: '1px solid #EFEFF5', borderRadius: '15px', width: '48%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                <img src={props.img2} alt="" style={{ paddingBottom: '10px' }} />
                <p style={{ color: '#0D2416', fontSize: '0.8rem' }}>{props.title2}</p>
            </div>




        </div>
    )

}


