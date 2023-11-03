import NavBar from "../home suction/NavBar"
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground"
import Button from "../home suction/Button"
import MemberShipStatus from "./MemberShipStatus"
/* import PesonalInfo from "./PersonalAndWorkInfoAndContactsAndFamilyData" */
import PersonalAndWorkInfoAndContactsAndFamilyData from "./PersonalAndWorkInfoAndContactsAndFamilyData"
import CallingInputs from "./CallingInputs"
import GuideTextInput from "./GuideTextInput"
import TextArea from "./TextArea"

import Footer from "../home suction/Footer"

export default function MembersPage() {
    return (
        <div>
            <NavBar />
            <div style={{ marginBottom: '30px' }}>
                <HeaderGreenBackground img='/imges/MemberShip.png' />
            </div>
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>

        {/*
                <MemberShipStatus title='Membership status' img="imges/Member.png" Circal1='/imges/Circal1.png' Circal2='/imges/Circal2.png' Case1='individual' Case2='Family' />
                */}


        <div style={{
          width: '100%', 
          margin: '0 auto', 
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <div>
            <input id="individual" type="radio" name="individual" value="individual" style={{ accentColor: '#1a705a' }} />
            <label for="individual" style={{ paddingLeft: '10px' }}>
              individual
            </label>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            <input id="family" type="radio" name="family" value="family" style={{ accentColor: '#1a705a' }} />
            <label for="family"  style={{ paddingLeft: '10px' }}>
              Family
            </label>
          </div>
        </div>

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
                <GuideTextInput P='Enter your jop' label='Jop' />
                <GuideTextInput P='Enter company name' label='Company Name' />
                <GuideTextInput P='Enter your job address' label='Job Address' />
            </div>

            <hr style={{ border: '1px solid #EBEBEC', marginBottom: '40px' }} />
            <div style={{ width: '90%', margin: '0 auto', marginBottom: '38px' }}>
                <div>
                    <PersonalAndWorkInfoAndContactsAndFamilyData img="imges/GreenPhone.png" title='Contacts' />
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '44px' }}>
                <GuideTextInput P='Enter your phone number' label='Phone Number' />
                <GuideTextInput P='Enter your home number' label='Home Number' />
                <GuideTextInput P='Enter your email' label='Email' />
            </div>

            <hr style={{ border: '1px solid #EBEBEC', marginBottom: '40px' }} />
            <div style={{ width: '90%', margin: '0 auto', marginBottom: '38px' }}>
                <div>
                    <PersonalAndWorkInfoAndContactsAndFamilyData img="imges/FamilyData.png" title='Family Data' Person='Person1' />
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '33px' }}>
                <GuideTextInput P='Enter name' label='Name' />
                <GuideTextInput P='Enter age' label='Age' />
                <GuideTextInput P='Enter national id' label='National ID*' />
                <TextArea label=' National ID Image*' />
                <GuideTextInput P='Enter relationship' label='Relationship*' />

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
