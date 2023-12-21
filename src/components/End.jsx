import { useContext } from "react";
import { QuizStatesContext } from "../context/quizStates";

const End = () => {
  const [quizState, dispatch] = useContext(QuizStatesContext);
  // Mostrar quantos pontos fez ao final.
  
  return (
    <div>
      <button onClick={() => dispatch({ type: "START" })}>Início</button>
    </div>
  );
};

export default End;
