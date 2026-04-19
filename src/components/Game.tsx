import React, { useState } from 'react';

const Game = () => {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    const questions = [
        { question: 'What is the capital of France?', answer: 'Paris' },
        { question: 'What is 2 + 2?', answer: '4' },
        { question: 'What is the largest ocean on Earth?', answer: 'Pacific Ocean' }
    ];

    const handleAnswer = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            answer: { value: string }; 
        };
        if (target.answer.value === questions[questionIndex].answer) {
            setScore(score + 1);
        }
        setQuestionIndex(questionIndex + 1);
    };

    if (questionIndex >= questions.length) {
        return <h2>Your final score is: {score}</h2>;
    }

    return (
        <div>
            <h1>Quiz Game</h1>
            <h2>{questions[questionIndex].question}</h2>
            <form onSubmit={handleAnswer}>
                <input name="answer" type="text" required />
                <button type="submit">Submit</button>
            </form>
            <p>Score: {score}</p>
        </div>
    );
};

export default Game;