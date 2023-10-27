
export default function Button(props) {
    return (
        <div>
            <button style={{
                background: '#249C7F', width: '100%', borderRadius: '5px', color: '#FFFFFF', padding: '14px 0', border: 'none', fontWeight: '500',
                fontSize: '1.1rem', height: '45px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>{props.btnName}</button>


        </div>
    )
}