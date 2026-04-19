import React from 'react';
import './QuestionDisplay.css'; // Assuming you have a CSS file for animations

const QuestionDisplay = ({ question }) => {
    return (
        <div className="question-display">
            <h2 className="question-text">{question.text}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button key={index} className="option-button">{option}</button>
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;
