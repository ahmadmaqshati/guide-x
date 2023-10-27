import FooterIcons from "./FooterIcons"
import MapIcon from "./MapIcon"
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <div style={{ backgroundImage: "linear-gradient(#225B83,#1A6F5A)", height: '714px' }}>
            <div style={{ width: '90%', margin: '0 auto' }}>

                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '59px', paddingBottom: '25px' }}>
                    <img src="/imges/White-X.png" alt="" style={{ paddingRight: '7px' }} />
                    <img src="/imges/White-Guide.png" alt="" />
                </div>

                <p style={{ color: '#FCFCFC', paddingBottom: '34px' }}>Our trusted Medical Guide,it's your go -to resource for reiable,up-to-date medical information. </p>


                <span style={{ color: '#BFD8E9', display: 'block', marginTop: '11px', fontSize: '0.9rem', paddingBottom: '12px', fontWeight: 500 }}>Links</span>


                <ul style={{ display: 'flex', justifyContent: 'space-between', width: '79%', fontWeight: '600' }}>
                    <ul style={{ listStyle: 'none', paddingBottom: '30px' }}>

                        <li> <Link to='/' style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Home</Link></li>




                        <li><Link to='/guide' style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Guide</Link></li>

                        <li><Link to='/members' style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Membership</Link></li>

                    </ul>

                    <ul style={{ listStyle: 'none' }} >
                        <li><Link to='/about' style={{ textDecoration: 'none', color: '#FCFCFC' }}>About Us</Link></li>



                        <li><Link to='/Contact' style={{ textDecoration: 'none', color: '#FCFCFC' }}>Contact Us</Link></li>

                        <li><a href="#" style={{ textDecoration: 'none', color: '#FCFCFC' }}>Terms</a></li>
                    </ul>
                </ul>

                <img src="imges/Contact Us.png" alt="" style={{ paddingBottom: '15px' }} />

                {/*-------------------------Location---------------------------*/}
                <ul style={{ listStyle: 'none', paddingBottom: '40px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}><MapIcon /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px', paddingTop: '3px' }}>455West Orchard Street Kings Mountain</a></li>

                    {/*-------------------------phone---------------------------*/}
                    <li style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}><img src="imges/b.png" alt="" /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px', paddingTop: '3px' }}>+088(246)642-27-10</a></li>
                    {/*-------------------------Email---------------------------*/}
                    <li><img src="imges/c.png" alt="" /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px' }}>example@gmail.com</a></li>
                </ul>


                <hr style={{ backgroundColor: '#337974', border: 'none', height: '2px', marginBottom: '28px' }} />

                {/* Nasted-Componant : FooterIcons Componant Calling 
                   into Footer Componant   */}
                <FooterIcons instagram='imges/instagram.png' Linkedin='imges/Linkedin.png' face='imges/face.png' twitter='imges/twitter.png' />


                {/* Copyrights */}
                {/*  <img src="imges/Copyrights.png" alt="" /> */}
                <span style={{ color: '#FFFFFF' }}><b style={{ paddingRight: '5px' }}>©</b>{new Date().getFullYear()} Untitled UI. All rights reserved. </span>


            </div>


        </div>


    )
}
