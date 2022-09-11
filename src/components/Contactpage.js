import React from "react";
import  Headercontact from "./Headercontact"
import Covertemplatecont from "./Covertemplatecont";

function Contactpage(){
    return(
        <div>
            <Headercontact className="bg-main text-black"/>
            <Covertemplatecont />
        </div>
    );
}

export default Contactpage;