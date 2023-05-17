import React from "react";
import "./QuizResult.css";

function QuizResult(props) {
  return (
    <>
      <div className="show-score">
        Your Score : {props.score} <br />
        Total Score : {props.totalScore}
      </div>
      <button id="play-again" onClick={props.playAgain}>
        Play Again
      </button>
    </>
  );
}

export default QuizResult;
