import "F:/Sheetal/Web dev/ReactProjects/quiz-app/src/App.css";
import { useContext } from "react";
import { GameStateContext } from "F:/Sheetal/Web dev/ReactProjects/quiz-app/src/info/Context";

function Home() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. Sheetal"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;