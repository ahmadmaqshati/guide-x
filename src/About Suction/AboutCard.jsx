
export default function AboutCard(props) {
    return (
        <div style={{ paddingTop: "62px", position: 'relative', marginBottom: '238px' }}>
            {/*----------------------------------img-------------------------------*/}
            <img style={{
                position: 'absolute',
                left: props.direc == 'right' ? '0' : '', right: props.direc == 'left' ? '0' : ''
            }} src={props.img} alt="" />
            {/*==================================img================================*/}

            {/*----------------------------------text----------------------------- */}
            <div style={{
                background: 'rgb(255, 255, 255,0.4)',
                width: '91%',
                /*  padding: '0px 36px', */
                position: 'absolute',
                top: '126px',

                padding: '25px 0px 25px 25px',
                maxWidth: '450px',
                /*
                ==================================================================== 
                controling with card index by using ((Conditional ternary operator))
                ====================================================================
                */
                right: props.direc == 'right' ? '0' : '',
                left: props.direc == 'left' ? '0' : ''
            }}>
                <h1 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '10px', color: '#14364D' }}>Our Vision</h1>
                <p style={{ width: '95%', fontSize: '13.8px', color: '#323641' }}>In our desire to reduce the burden of the costs of health care services for the individual.and improving and developing the services needed by medical institutions of all types </p>
            </div>
            {/*==================================text================================*/}

        </div>
    )
}






/*
export default function AboutCard() {
    return (
        <div style={{ position: 'relative' }}>
 
            <div style={{
                backgroundImage: `url(imges/About2.svg)`,
                height: '189px',
                backgroundRepeat: 'no-repeat',
                marginBottom: '106px',
                position: "absolute",
                width: '100%'
            }}>
 
                <div style={{
                    background: 'rgb(255, 255, 255,0.5)',
                    width: '91%',
                    position: 'absolute',
                    right: '0',
                    top: '64px',
                    padding: '26px 0px 23px 25px'
                }} >
                    <h1 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginBottom: '10px',
                        color: '#14364D'
                    }}>Our Vision</h1>
                    <p style={{
                        width: '95%',
                        fontSize: '13.8px',
                        color: '#323641'
                    }}>In our desire to reduce the burden of the costs of health care services for the individual.and improving and developing the services needed by medical institutions of all types </p>
                <In our desire to reduce the burden of the costs of health care services for the individual.and improving and developing the services needed by medical institutions of all types/div>
 
            </div>
 
        </div >
    )
}
 */