import React from 'react';
import './style.css'

const HighScore = (props) => {
    return (
        <div>
            <div className="title">
                <h1>Clicky Game!</h1>
            </div>
            <p className="instructions">Click an image to begin. Don't click the same image twice!</p>
            <div className="scoreBoard">
                <p className="hScore">High Score: <span>{props.highScore}</span></p>
                <p className="score">Score: <span>{props.currentScore}</span></p>
            </div>
        </div>
    )
}

export default HighScore; 