import './Inputs.css'
import GuideTextInput from './GuideTextInput'
import TextArea from './TextArea'


export default function CallingInputs() {
    return (
        <div style={{ marginBottom: '38px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <GuideTextInput P='Enter your name' label='Name' />
                <GuideTextInput P='Enter your date of birth' label='Date of birth' img='/imges/DateOfBirth.png' />
                <GuideTextInput P='Enter your address' label='Address' />
                <GuideTextInput P='Enter your national id' label='National ID*' />
                <TextArea label=' National ID Image*' />
                <GuideTextInput P='Select' label='Are you Affiliated with One Of The Following Organizations?' img='/imges/DropArrow.png ' />
            </div>
        </div>
    )
}

