import React from 'react';

interface AnswerOptionProps {
  option: string;
  onClick: (option: string) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ option, onClick }) => {
  return (
    <button className="answer-option" onClick={() => onClick(option)}>
      {option}
    </button>
  );
};

export default AnswerOption;