import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";

function Quiz() {
  const [quesNum, setQuesNum] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (quesNum < QuizData.length - 1) {
      setQuesNum(quesNum + 1);
      setSelectedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const previousQuestion = () => {
    if (quesNum > 0) {
      setQuesNum(quesNum - 1);
      setSelectedOption(0);
    }
  };

  const updateScore = () => {
    if (selectedOption === QuizData[quesNum].answer) {
      setScore(score + 1);
    }
  };

  const restartGame = () => {
    setQuesNum(0);
    setScore(0);
    setSelectedOption(0);
    setShowResult(false);
  };
  return (
    <div>
      <p className="heading">QUIZ APP</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            playAgain={restartGame}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-num">{quesNum + 1}/10. </span>
              <span id="question-text">{QuizData[quesNum].question}</span>
            </div>
            <div className="option-container">
              {QuizData[quesNum].options.map((option, idx) => {
                return (
                  <button
                    className={`option-btn ${
                      selectedOption == idx + 1 ? "checked" : null
                    }`}
                    key={idx}
                    onClick={() => setSelectedOption(idx + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <div className="btns">
              <input
                type="button"
                value="Previous"
                id="previous-btn"
                onClick={previousQuestion}
              ></input>
              <input
                type="button"
                value="Next"
                id="next-btn"
                onClick={changeQuestion}
              ></input>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
