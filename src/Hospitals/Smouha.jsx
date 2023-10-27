
export default function Smouha(props) {
    return (
        <div style={{ maxWidth: '162px', paddingBottom: '14px' }}>
            <div style={{ backgroundImage: `url(${props.img})`, width: '162px', height: '139px', position: 'relative' }}>

                <img src={props.img2} alt="" style={{
                    height: '69px', position: 'absolute', width: '100%', bottom: '0'
                }} />
                <h4 style={{ position: 'absolute', bottom: ' 14px', left: '20px', color: '#E9F5F2', fontWeight: '600', fontSize: '0.8rem' }}>{props.title}</h4>

            </div>

        </div>
    )
}
/* 
"imges/GreenLenear.png"
Smouha
*/