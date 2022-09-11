import React from "react";
// import Header from "./Header";
// import Content from "./Content";
// import Footer from './Footer';
import Breadcrumb from "./Breadcrumb";

function Convertemplatecontact(){
    return(
        <div className="cover-template-slider">
            <div className="text-main line-height-sm">
                Tutte le linee<br/> iniziano da un<br/> punto
            </div>
            <div className="dots-main">
                <div className="dots blue"></div>
                <div className="dots green"></div>
                <div className="dots orange"></div>
            </div>
            <div className="d-flex flex-column text-main mt-5 line-height-sm">
                <span className="subtitle">Sede operativa</span>
                <span>Enrico Deganello Studio</span>
                <span>Via Saccarelli 14</span>
                <span>10144, Torino, Italia</span>
            </div> 
            <div className="d-flex flex-column text-main line-height-sm">
                <span className="subtitle">Sede legale</span>
                <span>Enrico Deganello</span>
                <span>Via Tiziano Vecellio 73</span>
                <span>35100, Padova, Italia</span>
                <span>0000000000</span>
            </div>
            <Breadcrumb text="Back to top"/>
        </div>
    );
}

export default Convertemplatecontact;
