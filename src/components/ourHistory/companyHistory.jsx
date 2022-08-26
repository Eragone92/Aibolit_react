import React from "react"
import "./style_companyHistory.css"//import styles for component company history
import Carousel from 'react-bootstrap/Carousel'//import bootstrap carousel for component
import Imagess from "../Img/img"//import component imagess
import "./../adaptive.css"


const CompanyHistory = ()=> {//create compponent company history
   return (
      // create parent div
    <div className="companyHistory">
         <h2>История компании</h2>
         <p>История компании начинается 14 января 1999 года, когда было образовано ООО «Чижи». Идея пришла, т.к. у основателя компании Прозор Жанны Георгиевны была собака боксёр по кличке Бард…</p>
         <button className="companyHistory__button">ЧИТАТЬ ДАЛЕЕ</button>
         <h2 className="marg">Наши специалисты</h2>
         {/*wrapper div for carules  */}
<div className="caruselka">
   {/* add component carousel from library bootstrap */}
         <Carousel className="carousel">
            <div className="item">
               {/* component with component carousel item */}
      <Carousel.Item>
         {/* add component images for carousel item with any props */}
        <Imagess src={require("../../Images/spaecOne.png")} alt="spec one" class="slide_item"/>
        <Imagess src={require("../../Images/specTwo.png")} alt="spec two" class="slide_item"/>
        <Imagess src={require("../../Images/spaecOne.png")} alt="spec three" class="slide_item"/>
        <Imagess src={require("../../Images/specThree.png")} alt="spec four" class="slide_item"/>
        <Imagess src={require("../../Images/specThree.png")} alt="spec five" class="slide_item"/>
        <Imagess src={require("../../Images/specThree.png")} alt="spec six" class="slide_item"/>
     {/* close component carousel item */}
      </Carousel.Item>
          </div>
          {/* close component carousel */}
       </Carousel>
       

{/* close wrapper div for carousel */}
       </div>

    </div>//close parent div
   )
}
export default CompanyHistory//export component company history