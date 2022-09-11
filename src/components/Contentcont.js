import React from "react";

function Contentcont(){
    return(
        <div className="text-black">
            <img src={process.env.PUBLIC_URL + '/picdesigner.png'} id="picdesigner" className="mb-4"/>
            Lo studio è condotto da Enrico Deganello<br/> e Sahar Alizadeh Fard.
            Le aree di intervento sono:<br/>
            corporate identity<br/>
            catalogues<br/>
            concept and product development<br/>
            design conusult<br/>
            graphic and web design<br/>
            exhibition<br/>
            design scouting<br/>
            events concept
        </div>
    );
}

export default Contentcont;