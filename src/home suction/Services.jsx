/* import { Component } from "react" */
/* import Guide from "./Guide" */
import './Services.css'
/* import GuidePage from "../Guide Section/GuidePage" */
export default function Services(props) {
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