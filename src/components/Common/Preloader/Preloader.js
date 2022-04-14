import loaderGif from "../../../assets/loaderGif.svg";
import React from "react";


const Preloader = (props) => {
    return (
            <div>
                <img src={loaderGif} alt=""/>
            </div>
    )
}

export default Preloader;