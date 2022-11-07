import "./App.css";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import { useState } from "react";
import { GameStateContext } from "./info/Context";
function App() {
  const [gameState, setGameState] = useState("Home");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "Home" && <Home />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <Result />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
