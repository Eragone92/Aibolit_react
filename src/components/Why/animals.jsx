import React from "react"
import Benefits from "../Benefits/ourBenefits.jsx"//import component benefits
import Imagess from "../Img/img.jsx" //import component imagess
import "./style_animals.css"//import style
import "./../adaptive.css"

const Animals = ()=> {//create component animals
    return (
        // create parent div animals
        <div className="animals">
            {/* add div animals main text */}
           <div className="animals__main_text">1 150 000</div>
           {/* create div animals text */}
           <p className="animals__text">питомцам мы помогли за 18 лет работы</p>
           {/* add component imagess */}
           <Imagess src= {require("../../Images/image_bird.png")} class="animals__image"/>
            {/* create div animals bottom */}
           <div className="animals__bottom-text">Почему хозяева выбирают нас?</div>
           {/* add component  benefits */}
           <Benefits/>

        </div>//close parent tag
    )
}
export default Animals//export component animals