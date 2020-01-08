import React from "react";
import "./style.css";

const GPKCard = (props) =>
{
    return (
        <div className="card" onClick={ () => props.clickCard(props.id) }>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
           
        </div>
    );
}

export default GPKCard;



   
 