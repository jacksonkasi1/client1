import React from "react";
// import Header from "./Header";
import Content from "./Content";
// import Slider from './Slider';
// import Footer from './Footer';
import Breadcrumblack from "./Breadcrumblack";
import Contentcont from "./Contentcont";

function Convertemplate(){
    return(
        <div className="cover-template-cont text-black" >
            <Contentcont/>
            <Breadcrumblack text="References" className="text-black"/>
        </div>
    );
}

export default Convertemplate;