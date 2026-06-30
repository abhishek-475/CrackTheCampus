import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const increaseScore = (value = 1) => {
    setScore((prev) => prev + value);
    setCorrect((prev) => prev + 1);
  };

  const decreaseScore = () => {
    setWrong((prev) => prev + 1);
  };

  const resetScore = () => {
    setScore(0);
    setCorrect(0);
    setWrong(0);
  };

  return (
    <ScoreContext.Provider
      value={{
        score,
        correct,
        wrong,
        increaseScore,
        decreaseScore,
        resetScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);

  if (!context) {
    throw new Error("useScore must be used inside ScoreProvider");
  }

  return context;
}