import React from "react";


function Card(props){
    return(
        <div className="card-main">
            <div class="container">
                <div class="row vw-100 card-content">
                    
                    <div class="card-category">
                        {props.category}
                    </div>
                    <div class="card-title">
                        {props.title}
                    </div>
                    <div class="card-body">
                    {props.body}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;