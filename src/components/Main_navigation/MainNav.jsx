import React from "react";
import "./style_mainNav.css";//import component 

const MainNav = ()=> {//create component main nav
    return (
        // parent ul for links
        <ul className="mainNav">
           <li><a href="/">1</a></li>
           <li><a href="/">2</a></li>
           <li><a href="/">3</a></li>
           <li><a href="/">4</a></li>
           <li><a href="/">5</a></li>
           <li><a href="/">6</a></li>
        </ul>//close parent ul
    )
}
export default MainNav//export component mainNav