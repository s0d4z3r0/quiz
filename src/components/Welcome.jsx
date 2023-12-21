import { useContext } from "react";
import { QuizStatesContext } from "../context/quizStates";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizStatesContext)


  return (
    <div className="welcome">
      <h2>Seja Bem-Vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: 'PLAY'})}>
        Jogar
      </button>
    </div>
  );
};

export default Welcome;
