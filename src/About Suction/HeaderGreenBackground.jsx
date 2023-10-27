export default function HeaderGreenBackground(props) {
    return (
        <div style={{ backgroundImage: "url('imges/Aboutgreen.png')", height: '166px', position: 'relative', marginBottom: '33px' }}>

            <img src={props.img} alt="" style={{ paddingTop: '111px', paddingLeft: '25px' }} />
            <img src={props.Title} alt="" style={{ paddingTop: '111px', paddingLeft: '25px' }} />


            <img src="imges/square.png" alt="" style={{ width: '195px', height: '166px', position: 'absolute', right: '0' }} />

        </div>
    )
}/* AboutBackground */