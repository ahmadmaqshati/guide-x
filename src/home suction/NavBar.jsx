export default function NavBar() {
    return (
        <div style={{ height: '103px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' /* width: '90%', margin: '0 auto' */, width: '90%', margin: '0 auto' }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/imges/X.svg" alt="" style={{ width: '33.88px', height: '31px', paddingRight: '7px' }} />
                <img src="/imges/Guide.png" alt="" />
            </div>
            <img src="imges/menu-icon.svg" alt="" />


            {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/imges/menue.png" alt="" style={{ marginBottom: '7px' }} />
                <img src="/imges/menue.png" alt="" style={{ marginBottom: '7px' }} />
                <img src="/imges/menue.png" alt="" style={{ marginBottom: '7px' }} />
            </div> */}

        </div>
    )
}



