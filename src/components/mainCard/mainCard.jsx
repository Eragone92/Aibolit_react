import React from "react";
import "./style_mainCard.css";//import styles for component main card
import Vidget from "../vidgets/vidget";//import component vidget
import Imagess from "../Img/img";//import coomponent imagess


const MainCard = (props)=> {//create component main card with props
    return (
        //parent div for component
        <div className="mainCard">
            {/* left side */}
            <div className="mainCard__left">
                {/* text with any props */}
            <div className="mainCard__left_text">{props.text}</div>
             <button className="mainCard__left_button">Записаться</button>
             {/* add component vidget */}
             <Vidget/>
             </div>
             {/* add component imagess */}
              <Imagess src={props.sr} alt={props.alt}  class="mainCard__picture"/>
        </div>//close parent div
    )
}
export default MainCard//export component main card