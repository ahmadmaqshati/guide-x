import FooterIcons from "./FooterIcons"
export default function Footer() {
    return (
        <div style={{ backgroundImage: "url('imges/footer.png')", height: '714px' }}>
            <div style={{ width: '90%', margin: '0 auto' }}>

                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '59px', paddingBottom: '25px' }}>
                    <img src="/imges/White-X.png" alt="" style={{ paddingRight: '7px' }} />
                    <img src="/imges/White-Guide.png" alt="" />
                </div>

                <p style={{ color: '#FCFCFC', paddingBottom: '34px' }}>Our trusted Medical Guide,it's your go -to resource for reiable,up-to-date medical information. </p>
                <img src="imges/Links.png" alt="" style={{ paddingBottom: '12px' }} />

                <ul style={{ display: 'flex', justifyContent: 'space-between', width: '79%', fontWeight: '600' }}>
                    <ul style={{ listStyle: 'none', paddingBottom: '30px' }}>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Home</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Guide</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Membership</a></li>
                    </ul>
                    <ul style={{ listStyle: 'none' }} >
                        <li><a href="#" style={{ textDecoration: 'none', color: '#FCFCFC' }}>About Us</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#FCFCFC' }}>Contact Us</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#FCFCFC' }}>Terms</a></li>
                    </ul>
                </ul>

                <img src="imges/Contact Us.png" alt="" style={{ paddingBottom: '15px' }} />

                <ul style={{ listStyle: 'none', paddingBottom: '40px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}><img src="imges/map.png" alt="" /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px', paddingTop: '3px' }}>455West Orchard Street Kings Mountain</a></li>




                    <li style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}><img src="imges/b.png" alt="" /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px', paddingTop: '3px' }}>+088(246)642-27-10</a></li>

                    <li><img src="imges/c.png" alt="" /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px' }}>example@gmail.com</a></li>
                </ul>


                <hr style={{ backgroundColor: '#337974', border: 'none', height: '2px', marginBottom: '28px' }} />

                {/* Nasted-Componant : FooterIcons Componant Calling 
                   into Footer Componant   */}
                <FooterIcons instagram='imges/instagram.png' Linkedin='imges/Linkedin.png' face='imges/face.png' twitter='imges/twitter.png' />


                {/* Copyrights */}
                <img src="imges/Copyrights.png" alt="" />


            </div>


        </div>


    )
}
/*  <Icons circal='imges/circal.png' instagram='imges/instagram.png' />
                <Icons circal='imges/circal.png' instagram='imges/Linkedin.png' /> */