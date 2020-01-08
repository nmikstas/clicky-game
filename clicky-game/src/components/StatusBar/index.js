import React from "react";
import "./style.css";

const StatusBar = (props) =>
{
    let newClass;

    //Set the color of the status message.
    if(props.clickResult === "good")
    {
        newClass = "col-md-5 message good-guess";
    }
    else if(props.clickResult === "bad")
    {
        newClass = "col-md-5 message bad-guess";
    }
    else
    {
        newClass = "col-md-5 message reset-guess";
    }

    return (
        <div className="status-bar row">
            <div className="col-md-2 button">
                <button className="btn btn-outline-danger" onClick={ () => props.resetGame() }>Reset Game</button>
            </div>

            <div className={newClass}>
                {props.message}
            </div>
            
            <div className="col-md-5 score">
                Your Score: {props.score} | High Score: {props.hiScore}
            </div>
        </div>
    );
}

export default StatusBar;