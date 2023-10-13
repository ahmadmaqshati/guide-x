export default function NavBar() {
    return (
        <div style={{ height: '103px', display: 'flex', justifyContent: 'space-between' /* width: '90%', margin: '0 auto' */ }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/imges/X.png" alt="" style={{ width: '33.88px', height: '31px', paddingRight: '7px' }} />
                <img src="/imges/Guide.png" alt="" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/imges/menue.png" alt="" style={{ marginBottom: '7px' }} />
                <img src="/imges/menue.png" alt="" style={{ marginBottom: '7px' }} />
                <img src="/imges/menue.png" alt="" style={{ marginBottom: '7px' }} />
            </div>

        </div>
    )
}



