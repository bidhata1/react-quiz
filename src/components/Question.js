import React, { useState, useEffect } from 'react';
import './css/question.css';

const Question = ({ question, options, correct, handleAnswerClick, isLastQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    handleAnswerClick(selectedOption === correct);
    setIsAnswered(true);
  };

  useEffect(() => {
    setIsAnswered(false);
    setSelectedOption(null); // Reset when question changes
  }, [question]);

  return (
    <div className="main container">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <label
            key={index}
           
          >
            <input
              type="radio"
              name="quiz"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              disabled={isAnswered}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={isAnswered || selectedOption === null}>
        {isLastQuestion ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default Question;
