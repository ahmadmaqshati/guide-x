
export default function MemberShipStatus(props) {
    return (
        <div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '22px' }}>
                <img src={props.img}/* "imges/Member.png" */ alt="" />
                <span style={{ fontWeight: '600', color: '#14364D' }}>{props.title}{/* Membership status */}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '82%' }}>
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '4px' }}>
                    <img src={props.Circal1}/* "imges/Circal1.png" */ alt="" />
                    <span style={{ paddingLeft: '15px', fontSize: '0.9rem', fontWeight: '500', color: '#212121' }}>{props.Case1}</span>
                </div>
                <div>
                    <img src={props.Circal2}/* "imges/Circal2.png" */ alt="" />
                    <span style={{ paddingLeft: '15px', fontSize: '0.9rem', fontWeight: '500', color: '#212121' }}>{props.Case2}{/* Family */}</span>
                </div>
            </div>

        </div>
    )
}