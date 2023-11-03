import './Services.css'
export default function ServicesCards(props) {
    return (

        <div className="service-card">

            <img src={props.img} alt="" />
            <h4>{props.serviceType}
                <p>
                    Guide X develops and equips medical facilities (hospitals-specialized center-clinics) with the highest international quality standards
                </p>
            </h4>

        </div>



    )

}




