export default function Guidances(props) {
    return (


        <div style={{
            border: '0.1px solid #E2E2E8', width: '163px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            , borderRadius: '15px', padding: '10px 0', marginBottom: '1px'

        }}>
            {/* 0.12rem  */}
            <div style={{ paddingRight: '12px', paddingLeft: '15px' }}>
                <h1 style={{ fontSize: '25px', color: '#0D2416', fontWeight: '700', }}>{props.numb}</h1>

                <p style={{ fontSize: '12px', fontWeight: '400' }}>{props.guideName}</p>


            </div>

            <div>
                <img src={props.guideImg} alt="" style={{ paddingTop: '12px', paddingRight: '20px' }} />
            </div>




        </div>


    )
}