import React from 'react';

const ScoreBoard = ({ score, progress }) => {
    return (
        <div>
            <h2>Score: {score}</h2>
            <h2>Progress: {progress}%</h2>
        </div>
    );
};

export default ScoreBoard;