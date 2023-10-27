export default function HeaderGreenBackground2(props) {
    return (
        <div style={{ backgroundImage: "url('imges/Aboutgreen.png')", height: '166px', position: 'relative', marginBottom: '33px' }}>

            <img src={props.img} alt="" style={{ position: 'absolute', bottom: '15px', left: '17px' }} />
            <img src={props.Title} alt="" style={{ position: 'absolute', bottom: '28px', left: '79px', zIndex: '1' }} />


            <img src="imges/square.png" alt="" style={{ width: '195px', height: '166px', position: 'absolute', right: '0' }} />

        </div>
    )
}/* AboutBackground */