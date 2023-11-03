import NavBar from "../home suction/NavBar"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import Button from "../home suction/Button"
import MemberShipStatus from "./MemberShipStatus"
/* import PesonalInfo from "./PersonalAndWorkInfoAndContactsAndFamilyData" */
import PersonalAndWorkInfoAndContactsAndFamilyData from "./PersonalAndWorkInfoAndContactsAndFamilyData"
import CallingInputs from "./CallingInputs"
import Inputs from "./Inputs"
import TextArea from "./TextArea"

import Footer from "../home suction/Footer"

export default function MembersPage() {
    return (
        <div>
            <NavBar />
            <div style={{ marginBottom: '30px' }}>
                <HeaderGreenBackground img='imges/MemberShip.png' />
            </div>
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>

                <MemberShipStatus title='Membership status' img="imges/Member.png" Circal1='imges/Circal1.png' Circal2='imges/Circal2.png' Case1='individual' Case2='Family' />

            </div>
            <hr style={{ border: '1px solid #EBEBEC', marginBottom: '40px' }} />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>
                <PersonalAndWorkInfoAndContactsAndFamilyData img="imges/AddressBooks.png" title='Personal Info' />
            </div>
            <div style={{ width: '90%', margin: '0 auto' }}>
                <CallingInputs />
            </div>

            <hr style={{ border: '1px solid #EBEBEC', marginBottom: '40px' }} />
            <div style={{ width: '90%', margin: '0 auto', marginBottom: '38px' }}>
                <div>
                    <PersonalAndWorkInfoAndContactsAndFamilyData img="imges/Bag.png" title='Work Info' />
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '33px' }}>
                <Inputs P='Enter your jop' label='Jop' />
                <Inputs P='Enter company name' label='Company Name' />
                <Inputs P='Enter your job address' label='Job Address' />
            </div>

            <hr style={{ border: '1px solid #EBEBEC', marginBottom: '40px' }} />
            <div style={{ width: '90%', margin: '0 auto', marginBottom: '38px' }}>
                <div>
                    <PersonalAndWorkInfoAndContactsAndFamilyData img="imges/GreenPhone.png" title='Contacts' />
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '44px' }}>
                <Inputs P='Enter your phone number' label='Phone Number' />
                <Inputs P='Enter your home number' label='Home Number' />
                <Inputs P='Enter your email' label='Email' />
            </div>

            <hr style={{ border: '1px solid #EBEBEC', marginBottom: '40px' }} />
            <div style={{ width: '90%', margin: '0 auto', marginBottom: '38px' }}>
                <div>
                    <PersonalAndWorkInfoAndContactsAndFamilyData img="imges/FamilyData.png" title='Family Data' Person='Person1' />
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '33px' }}>
                <Inputs P='Enter name' label='Name' />
                <Inputs P='Enter age' label='Age' />
                <Inputs P='Enter national id' label='National ID*' />
                <TextArea label=' National ID Image*' />
                <Inputs P='Enter relationship' label='Relationship*' />

            </div>


            <div style={{ border: "1px solid #EFEFF5", width: 'max-content', display: 'flex', alignItems: 'center', marginBottom: '42px', marginLeft: '20px', padding: '10px 23px', gap: '10px', borderRadius: '5px' }}>
                <img src="imges/plusIcon.png" alt="" />
                <span style={{ color: '#249C7F', fontWeight: '500', fontSize: '1.1rem' }}>Add</span>
            </div>



            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>
                <Button btnName="Send" />
            </div>


            <Footer />




        </div>
    )
}