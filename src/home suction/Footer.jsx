import FooterIcons from "./FooterIcons"
import WhiteMapIcon from "./WhiteMapIcon"
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

                {/*===========================Links-List=============================*/}
                <ul style={{ display: 'flex', justifyContent: 'space-between', width: '79%', fontWeight: '600' }}>
                    <ul style={{ listStyle: 'none', paddingBottom: '30px' }}>
                        {/*==========================Home=======================*/}
                        <li> <Link to='/' style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Home</Link></li>
                        {/*==========================Home=======================*/}


                        {/*==========================Guide=======================*/}
                        <li><Link to='/guide' style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Guide</Link></li>
                        {/*==========================Guide=======================*/}


                        {/*===========================Membership=====================*/}
                        <li><Link to='/membership' style={{ textDecoration: 'none', color: '#FCFCFC', display: 'block', paddingBottom: '5px' }}>Membership</Link></li>
                        {/*=========================Membership=======================*/}


                    </ul>

                    {/*==========================About Us=======================*/}
                    <ul style={{ listStyle: 'none' }} >
                        <li><Link to='/about' style={{ textDecoration: 'none', color: '#FCFCFC' }}>About Us</Link></li>
                        {/*==========================About Us=======================*/}

                        {/*===========================Contact Us=====================*/}
                        <li><Link to='/Contact' style={{ textDecoration: 'none', color: '#FCFCFC' }}>Contact Us</Link></li>
                        {/*=========================Contact Us=======================*/}


                        {/*==========================Terms=======================*/}
                        <li><a href="#" style={{ textDecoration: 'none', color: '#FCFCFC' }}>Terms</a></li>
                        {/*==========================Terms=======================*/}
                    </ul>

                </ul>{/*=========================Links-List==========================*/}



                <img src="/imges/Contact Us.png" alt="" style={{ paddingBottom: '15px' }} />

                {/*=======================Location(Phone-Email)=======================*/}
                <ul style={{ listStyle: 'none', paddingBottom: '40px' }}>

                    {/*===========================Location=========================*/}
                    <li style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}><WhiteMapIcon /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px', paddingTop: '3px' }}>455West Orchard Street Kings Mountain</a></li>
                    {/*============================Location==========================*/}

                    {/*============================Phone==========================*/}
                    <li style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px' }}><img src="/imges/b.png" alt="" /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px', paddingTop: '3px' }}>+088(246)642-27-10</a></li>
                    {/*============================Phone==========================*/}


                    {/*============================Email==========================*/}
                    <li><img src="/imges/c.png" alt="" /><a href="#" style={{ color: '#E6E6E6', textDecoration: 'none', paddingLeft: '7px', fontSize: '14px' }}>example@gmail.com</a></li>
                    {/*============================Email==========================*/}
                </ul>
                {/*=======================Location-Phone-Email=======================*/}

                <hr style={{ backgroundColor: '#337974', border: 'none', height: '2px', marginBottom: '28px' }} />


                {/* Nasted-Componant : FooterIcons Componant Calling into Footer Componant   */}

                <FooterIcons Instagram='/imges/Instagram.png' In='/imges/In.png' Face='/imges/Face.png' Tweeter="/imges/Tweeter.png" />














                {/* ////////////////////////////////////////////////////////////// */}


                {/*==========================Copyrights==========================*/}

                <span style={{ color: '#FFFFFF' }}><b style={{ paddingRight: '5px' }}>©</b>{new Date().getFullYear()} Untitled UI. All rights reserved. </span>

                {/*=========================Copyrights============================*/}


            </div>


        </div>


    )
}
