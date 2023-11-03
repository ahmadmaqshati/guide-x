import PlaceInputs from "./PlaceInputs";

export default function SearchAndFilters() {
    return (
        <div >
            <div style={{ border: '1px solid #EFEFF5', borderRadius: '5px', width: '90%', height: '48px', lineHeight: '48px', margin: 'auto', display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <img style={{ margin: '0 10px' }} src="imges/SearchIcon.png" alt="" />
                <input 
                  style={{
                   color: '#8F8F8F', fontSize: '0.85rem' ,
                    border: 'none',
            width: '100%',
            outline: 'none',
                }} 
                placeholder="Search by doctor,hospital "
                />
            </div>




            <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', margin: 'auto', height: '48px', marginBottom: '23px' }}>

                <PlaceInputs title='City' img="imges/DropArrow.png" />
                <PlaceInputs title='Area' img="imges/DropArrow.png" />
                <PlaceInputs title='Category' img="imges/DropArrow.png" />




                {/*  <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #EFEFF5', borderRadius: '5px', width: '32% ', alignItems: 'center', height: '100%' }}>
                    <h4 style={{ paddingLeft: '9px', color: '#8F8F8F', fontWeight: '500' }}>City</h4>
                    <img style={{ paddingRight: '9px' }} src="imges/DropArrow.png" alt="" />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #EFEFF5', borderRadius: '5px', width: '32% ', alignItems: 'center', height: '100%' }}>
                    <h4 style={{ paddingLeft: '9px', color: '#8F8F8F', fontWeight: '500' }}>City</h4>
                    <img style={{ paddingRight: '9px' }} src="imges/DropArrow.png" alt="" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #EFEFF5', borderRadius: '5px', width: '32% ', alignItems: 'center', height: '100%' }}>
                    <h4 style={{ paddingLeft: '9px', color: '#8F8F8F', fontWeight: '500' }}>City</h4>
                    <img style={{ paddingRight: '9px' }} src="imges/DropArrow.png" alt="" />
                </div> */}



            </div>



        </div>
    )
}
