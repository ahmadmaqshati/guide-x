import ServicesCards from "./ServicesCards"

export default function ServicesList(props) {

    const servicesDataMapping = props.services.map((servic) => <ServicesCards img={servic.img} serviceType={servic.serviceType} key={servic.id} />)

    return (
        <div style={{
            width: '90%', margin: '0 auto', color: '#14364D'
        }}>
            {servicesDataMapping}
        </div>
    )
} 