import NavBar from "../home suction/NavBar";
import HeaderGreenBackground from "../About Suction/HeaderGreenBackground";
import MemberShipStatus from "../Members Suction/MemberShipStatus";
import GuideTextInput from "../Members Suction/GuideTextInput";
import TextArea from "../Members Suction/TextArea";
import Button from "../home suction/Button";
import Footer from "../home suction/Footer";

export default function Jobs1Page() {
    return (
        <div>
            <NavBar />
            <HeaderGreenBackground img='/imges/Jops.png' />
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '37px' }}>

                <MemberShipStatus title='Membership status' img="imges/addressBook.png" />
            </div>
            <div style={{ width: '90%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '33px' }}>
                <GuideTextInput P='thePenTool' label='Name' />
                <GuideTextInput P='thePenTool' label='Phone Number' />
                <GuideTextInput P='thePenTool' label='Email' />
                <TextArea label=' Cv' />
            </div>
            <div style={{ width: '90%', margin: '0 auto', paddingBottom: '40px' }}>
                <Button btnName="Submit" />
            </div>
            <Footer />





        </div>
    )
}
