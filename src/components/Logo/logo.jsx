import React from "react";
import Img from "../Img/img";//import img component 
import "./style_logo.css";//import styles for component logo
const Logo = ()=> {//create component logo
    return (
        // return tag <a> with component img and some props in component
        <a href="/"><Img src={require("../../Images/logo.png")} alt="logo" class="header__logo"/></a>
    )
}
export default Logo//export logo component