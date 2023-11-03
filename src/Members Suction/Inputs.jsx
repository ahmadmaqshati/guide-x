

export default function Inputs(props) {
    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: '5px' }}>
            <label htmlFor="x">{props.label}</label>

            <div style={{ position: 'relative' }}>
                <input type="text" id="x" placeholder={props.P} style={{ border: '1px solid #EFEFF5', height: '53px', borderRadius: '5px', width: '100%' }} />
                <div style={{ position: 'absolute', top: '15px', right: '20px' }}>
                    <img src={props.img} alt='' />
                </div>
            </div>

        </div>
    )
}
/* imges/DateOfBirth.png */