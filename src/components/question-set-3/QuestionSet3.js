import React, { useState } from "react";
import "./QuestionPage.css";

const QuestionSet1 = () => {
  const [questions] = useState([
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correct: "a",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Earth", "Jupiter", "Venus"],
      correct: "a",
    },
    {
      question: "What is the boiling point of water?",
      options: ["100°C", "90°C", "80°C", "70°C"],
      correct: "a",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Chaucer", "Dickens", "Austen"],
      correct: "a",
    },
    {
      question: "What is the smallest prime number?",
      options: ["2", "3", "5", "7"],
      correct: "a",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Iron", "Helium"],
      correct: "a",
    },
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz</h1>
      {questions.map((question, index) => (
        <div key={index} className="question-block">
          <h3 className="question-text">{question.question}</h3>
          <div className="options-container">
            {question.options.map((option, optionIndex) => {
              const optionLetter = String.fromCharCode(97 + optionIndex); // a, b, c, d
              return (
                <div key={optionIndex} className="option">
                  <label className="option-label">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={optionLetter}
                      onChange={() => handleOptionChange(index, optionLetter)}
                      checked={selectedAnswers[index] === optionLetter}
                    />
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
      {score !== null && (
        <div className="score-display">
          <h2>Your Score: {score} / {questions.length}</h2>
        </div>
      )}
    </div>
  );
};

export default QuestionSet1;