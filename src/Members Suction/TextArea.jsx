import './TextArea.css'
export default function TextArea(props) {
    return (
        <div style={{ position: 'relative' }}>
            <label htmlFor="">{props.label}</label>
            <div className='textarea' style={{ border: '1px dashed #DCDCDC' }} ></div>
            <div className="area"></div>

            <span style={{ color: '#249C7F', fontSize: '0.8rem', position: 'absolute', top: '101px', left: '60px' }}>Upload a file <span style={{ color: '#B4B4B4' }}>or drag and drop here</span></span>
        </div>
    )
}
