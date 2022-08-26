import React from "react";
import HeaderMenu from "../header__menu/header__menu";//import component header menu
import Logo from "../Logo/logo";//import component logo
import "./style_header.css";//import styles for component header

const Header = ()=> {//create component header
   return (
    // parent symantic tag header for our component
    <header className="header">
        {/* add component logo */}
        <Logo/>
        {/* add component header menu */}
        <HeaderMenu/>
        {/* create div for city name */}
        <div className="header__map"><span className="header__map_text">ВОЛГОГРАД</span></div>

    </header>//close parent tag header
   )
}
export default Header//export component header