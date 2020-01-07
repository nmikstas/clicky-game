import React from "react";
import "./style.css";

const StatusBar = (props) =>
{
    return (
        <div className="status-bar">
            <button className="btn btn-outline-danger" onClick={ () => props.resetGame() }>Reset Game</button>
          
            <span className="message">{props.message}</span>
            <span className="score">Your Score: {props.score} | </span>
            <span className="hi-score">High Score: {props.hiScore}</span>
        </div>
    );
}

export default StatusBar;