import React from "react"
import Imagess from "../Img/img"//import images component
import "./style_mobileVersion.css"//import styles for component mobile version

const MobileVersion = ()=> {//create component mobile version
    return (
        // create parent div for mobile version
        <div className="mobileVersion">
            {/* left side */}
            <div className="mobileVersion_leftSide">
                {/* top text */}
            <span className="mobileVersion__text-top">скоро</span>
            {/* title */}
            <h2 className="mobileVersion__headline">Удобное приложение для питомцев и <br/>их хозяев</h2>
            {/* parent div for two image components */}
            <div className="mobileVersion__for-iosAndroid">
             <Imagess src={require("../../Images/ios.png")} alt="ios" class="mobileVersion__for-iosAndroid-img"/>
             <Imagess  src={require("../../Images/google-play-badge.png")} alt="android" class="mobileVersion__for-iosAndroid-img"/>
            </div>
            </div>
            {/* right side */}
            <div className="mobileVersion__rightSide">
                {/* image component with some props */}
             <Imagess src={require("../../Images/dogi.png")} alt="DOG" class="mobileVersion__rightSide-dog"/>
             {/* <Imagess src={require("../../Images/mobile.png")} alt="mobile" class="mobileVersion__rightSide-mob"/> */}
            </div>
        </div>//close parent div
    )
}

export default MobileVersion//export component mobile version