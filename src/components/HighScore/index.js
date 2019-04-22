import React from 'react';

const HighScore = (props) => {
    return(
        <div className="scoreBoard">
            <p>Score: <span>{props.currentScore}</span></p>
            <p>High Score: <span>{props.highScore}</span></p>
        </div>
    )
}

export default HighScore; 