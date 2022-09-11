import React from "react";

function Breadcrumblack(props){
    return(
        <div className="main-bread">
            <div className="dot-black">
            </div>
            <div className="text-dot">
                {props.text}
            </div>
        </div>
    );
}
export default Breadcrumblack;