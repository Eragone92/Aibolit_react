import React from "react"
import Imagess from "../Img/img"//import component 
import "./style_contacts.css"//import styles for component contacts
import "./../adaptive.css"

const Contacts = ()=> {
    return (
        // create parent div for component contacts
        <div className="contacts">
            {/* right side */}
         <div className="contacts__right">
            <div className="contacts__right_one">
             <h3>Айболит на Краснополянской</h3>
             <ul className="contacts__right_one-list">
                <li>Дзержинский район, ул. Краснополянская, 30</li>
                <li>96 22 92</li>
                <li>Круглосуточно</li>
             </ul>
             </div>
             <div className="contacts__right_two">
                <h3>Айболит на Тулака</h3>
                <ul className="contacts__right_two-list">
                <li>Советский район, ул. Карла Маркса, 7</li>
                <li>96 22 92</li>
                <li>Круглосуточно</li>
             </ul>
             </div>
         </div>
         {/* left side */}
         <div className="contacts__left">
            {/* add component imagess with some props */}
              <Imagess src={require("./../../Images/map.png")} alt="map" class="contacts__left-img"/>
         </div>
        </div>//close parent div
    )
}
export default Contacts//export component contacts