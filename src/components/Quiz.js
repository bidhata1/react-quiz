
import React, { useState } from 'react';
import Question from './Question';

const quizData = [
  {
    question: 'What is the capital of Nepal?',
    options: ['Pokhara', 'Kathmandu', 'Biratnagar', 'Lalitpur'],
    correct: 'Kathmandu'
  },
  {
    question: 'Which is the highest mountain in Nepal?',
    options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Makalu'],
    correct: 'Mount Everest'
  },
  
  {
    question: 'Which river is the longest in Nepal?',
    options: ['Bagmati', 'Karnali', 'Gandaki', 'Mahakali'],
    correct: 'Karnali'
  },
  {
    question: 'Which is the national animal of Nepal?',
    options: ['Tiger', 'Snow Leopard', 'One-horned Rhinoceros', 'Cow'],
    correct: 'Cow'
  },
  {
    question: 'When is Nepal’s Constitution Day celebrated?',
    options: ['August 15', 'September 20', 'July 4', 'October 2'],
    correct: 'September 20'
  },
  {
    question: 'Which city is known as the "City of Lakes" in Nepal?',
    options: ['Kathmandu', 'Bhaktapur', 'Pokhara', 'Dharan'],
    correct: 'Pokhara'
  },
  {
    question: 'Who was the first Prime Minister of Nepal?',
    options: ['Matrika Prasad Koirala', 'Bishweshwar Prasad Koirala', 'Jung Bahadur Rana', 'Girija Prasad Koirala'],
    correct: 'Jung Bahadur Rana'
  },
  {
    question: 'Which Nepali festival is known as the "festival of lights"?',
    options: ['Holi', 'Tihar', 'Dashain', 'Maghe Sankranti'],
    correct: 'Tihar'
  },
  {
    question: 'Which is the national flower of Nepal?',
    options: ['Lotus', 'Sunflower', 'Lalupate', 'Rhododendron'],
    correct: 'Rhododendron'
  }
  
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setTimeout(() => setCurrentQuestion(nextQuestion), 1000); // Auto move to next after 1 second
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Total Questions: {quizData.length}</p>
          <p>Correct Answers: {score}</p>
          <p>Wrong Answers: {wrongAnswers}</p>
        </div>
      ) : (
        <Question 
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          correct={quizData[currentQuestion].correct}
          handleAnswerClick={handleAnswerClick}
          isLastQuestion={currentQuestion === quizData.length - 1}
        />
      )}
    </div>
  );
};

export default Quiz;