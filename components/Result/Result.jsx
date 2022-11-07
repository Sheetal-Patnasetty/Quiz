import React from "react";
import "F:/Sheetal/Web dev/ReactProjects/quiz-app/src/App.css";
import { useContext } from "react";
import { GameStateContext } from "F:/Sheetal/Web dev/ReactProjects/quiz-app/src/info/Context";
import { Questions } from "F:/Sheetal/Web dev/ReactProjects/quiz-app/src/info/Questions";

const Result = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("Home");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Result;