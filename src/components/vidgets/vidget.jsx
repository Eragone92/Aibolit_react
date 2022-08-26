import React from "react"
import "./style_vidget.css"//import styles for vidgets


const Vidget = ()=> { //create component vidget
    return (
        //create parent div vidgets
        <div className="vidgets">
            {/* links for social networks */}
           <a href="/"><div className="insta"></div></a>
           <a href="/"><div className="fb"></div></a>
           <a href="/"><div className="vk"></div></a>
           <a href="/"><div className="youtube"></div></a>
        </div>//close parent div
    )
}
export default Vidget//export component