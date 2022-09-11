import React from "react";
// import Header from "./Header";
import Content from "./Content";
// import Slider from './Slider';
// import Footer from './Footer';
import Breadcrumb from "./Breadcrumb";

function Convertemplate(){
    return(
        <div className="cover-template">
            <Content />
            <Breadcrumb text="Stories"/>
        </div>
    );
}

export default Convertemplate;