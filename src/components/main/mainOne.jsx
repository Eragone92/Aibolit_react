import React from "react";
import MainCard from "../mainCard/mainCard";//import component main card
import MainNav from "../Main_navigation/MainNav";//import component main nav
import "./style_mainOne.css";//import styles for component mainone
import "./../adaptive.css"
const MainOne = ()=> {//create component main one
    return (
        // parent div for main one
        <div className="mainOne">
            {/* add component main nav */}
            <MainNav/>
            {/* add component main card */}
            <MainCard text="Айболит круглосуточная ветклиника" sr={require("../../Images/cat&dog.png")}/>
       </div>//close parent div
    )
}
export default MainOne//export component main one