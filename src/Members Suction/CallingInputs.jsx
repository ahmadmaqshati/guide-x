import './Inputs.css'
import Inputs from './Inputs'
import TextArea from './TextArea'


export default function CallingInputs() {
    return (
        <div style={{ marginBottom: '38px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <Inputs P='Enter your name' label='Name' />
                <Inputs P='Enter your date of birth' label='Date of birth' img='imges/DateOfBirth.png' />
                <Inputs P='Enter your address' label='Address' />
                <Inputs P='Enter your national id' label='National ID*' />
                <TextArea label=' National ID Image*' />
                <Inputs P='Select' label='Are you Affiliated with One Of The Following Organizations?' img='imges/DropArrow.png ' />
            </div>
        </div>
    )
}

