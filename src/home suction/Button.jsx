
export default function Button(props) {
    return (
        <div style={{ /* width: '90%', margin: '0 auto' */ paddingBottom: '126px' }}>
            <button style={{ background: '#249C7F', width: '100%', borderRadius: '5px', color: '#FFFFFF', padding: '14px 0', border: 'none' }}>{props.btnName}</button>


        </div>
    )
}