import React from "react"
import "./style_serviceCard.css"//import styles for compnent service card

const ServiceCard = (props)=> {//create component service card
    return (
        // create parent div for service card
        <div className="serviceCard">
            {/* div with text useng props */}
            <div>{props.text}</div>
            <div className="card"></div>
            
            <div className="service">26 услуг</div>
        </div>//close parent div
    )
}

export default ServiceCard//export component service card