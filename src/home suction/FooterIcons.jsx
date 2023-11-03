/*-------------------------- footer icons-------------------------- */
export default function FooterIcons(props) {
    return (
        <div style={{
            display: 'flex', justifyContent: 'space-between', width: '60%', marginBottom: '25px'
        }}>
            {/*==========================footerIcons==============================*/}
            <img src={props.Instagram} alt="" />
            <img src={props.In} alt="" />
            <img src={props.Face} alt="" />
            <img src={props.Tweeter} alt="" />
            {/*==========================footerIcons==============================*/}
        </div >

    )

}

















/* export default function Icons(props) {
    return (
        <div style={{ backgroundImage: `url(${props.circal})`, height: '40px', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px' }}>
            <div style={{ width: '16px', height: '16px' }} >
                <img src={props.instagram} alt="" style={{
                    width: '100%', height: '100%'
                }} />

                <img src={props.Linkedin} alt="" style={{
                    width: '100%', height: '100%'
                }} />
            </div>



        </div>

    )

} */







/*  <div style={{ backgroundImage: "url('/imges/circal.png')", height: '40px', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px' }}>
     <div style={{ width: '16px', height: '16px' }} >
         <img src='/imges/instagram.png' alt="" style={{
             width: '100%', height: '100%'
         }} />

     </div> 
 </div>

 
 <div style={{ backgroundImage: "url('/imges/circal.png')", height: '40px', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', margin: '1px' }}>
     <div style={{ width: '16px', height: '16px' }} >

         <img src='/imges/Linkedin.png' alt="" style={{
             width: '100%', height: '100%'
         }} />
     

 </div> */






