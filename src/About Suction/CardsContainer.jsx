import AboutCard from "./AboutCard"
export default function CardsContainer() {
    return (
        <div style={{ backgroundImage: `linear-gradient(#2B6C9F,#0E8180,#218E74)`, height: '675px ', marginBottom: ' 43px' }}>
            <AboutCard img='imges/About2.svg' direc='right' />
            <AboutCard img='imges/About1.svg' direc='left' />



        </div>
    )
}