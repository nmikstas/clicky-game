import React from "react";
import "./style.css";

const StatusBar = (props) =>
{
    return (
        <div className="status-bar row">
            <div className="col-md-2 button">
                <button className="btn btn-outline-danger" onClick={ () => props.resetGame() }>Reset Game</button>
            </div>

            <div className="col-md-5 message">
                {props.message}
            </div>
            
            <div className="col-md-5 score">
                Your Score: {props.score} | High Score: {props.hiScore}
            </div>
        </div>
    );
}

export default StatusBar;