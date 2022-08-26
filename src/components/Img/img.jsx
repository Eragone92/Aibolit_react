import React from "react";
const Imagess = (props)=> {//create img component
    return (
        // create tag img and add some props
        <img src={props.src} alt={props.alt} className={props.class}/>
    )
}

export default Imagess//export imgcomponent