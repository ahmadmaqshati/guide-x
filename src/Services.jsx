import Guide from "./Guide"
export default function Services(props) {
    return (

        <div style={{ marginTop: '-17px' }}>


            <img src={props.img} alt="" style={{
                width: '311px', height: '160px', margin: '0 auto', display: 'block', /* position: 'relative', top: '32px', zIndex: '-1', */ borderRadius: '7px'
            }} />
            <h4 style={{
                background: '#249C7F', borderRadius: '5px', color: '#FCFCFC', fontWeight: '600', paddingLeft: '12px', height: '56px', lineHeight: '56px', position: 'relative', bottom: '33px'
            }}>{props.discr}</h4>

        </div>
        /* padding: '15px 15px 15px 12px' */


    )

}    /*     position: relative;
bottom: 33px; */