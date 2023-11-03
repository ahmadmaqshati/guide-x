export default function PlaceInputs(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #EFEFF5', borderRadius: '5px', width: '32% ', alignItems: 'center', height: '100%', marginBottom: '50px' }}>
            <h4 style={{ paddingLeft: '9px', color: '#8F8F8F', fontWeight: '500', fontSize: '0.85rem' }}>{props.title}</h4>
            <img style={{ paddingRight: '9px' }} src={props.img} alt="" />
        </div>


    )
}