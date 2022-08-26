import React from "react";
import "./style_header__menu.css";//import styles for component header menu
const HeaderMenu = ()=> {//create component header menu
  
    return (
        // create tag ul for header menu
        <ul className="header__menu">
            <li><a href="/">ЛИЧНЫЙ КАБИНЕТ</a></li>
            <li><a href="/">О НАС</a></li>
            <li><a href="/">НОВОСТИ И АКЦИИ</a></li>
            <li><a href="/">КОНТАКТЫ</a></li>
            <li><a href="/">НОВОСТИ И АКЦИИ</a></li>
        </ul>//close tag ul
    )
}
export default HeaderMenu//export component header menu