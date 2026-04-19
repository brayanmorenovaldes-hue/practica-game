import React from 'react';

interface FeedbackProps {
    isCorrect: boolean;
    explanation: string;
}

const Feedback: React.FC<FeedbackProps> = ({ isCorrect, explanation }) => {
    return (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            <h2>{isCorrect ? 'Correct!' : 'Incorrect!'}</h2>
            <p>{explanation}</p>
        </div>
    );
};

export default Feedback;
