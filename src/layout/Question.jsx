import "./Question.css";
import { QuizStatesContext } from "../context/quizStates";
import { useContext, useState } from "react";

const Question = ({ question, totalQuestions }) => {
  const [quizState, dispatch] = useContext(QuizStatesContext);
  const [resposta, setResposta] = useState("");
  const [response, setResponse] = useState(null);
  const [nextButton, setNextButton] = useState(false);
  const nextQuestion = (e) => {
    e.preventDefault();
    setResponse(null);
    setResposta("");
    setNextButton(false);
    dispatch({ type: "NEXT_QUESTION" });
  };
  const showAnswer = (e) => {
    e.preventDefault();
    setResponse(true);
    setNextButton(true);
  };
  return (
    <form className="questionForm" onSubmit={(e) => showAnswer(e)}>
      <span>{question.questionText}</span>
      <div className="options">
        {question.options.map((option) => (
          <label
            key={option.optionID}
            className={
              response &&
              (option.optionID === question.IDOptionTrue ? "correct" : "wrong")
            }
          >
            <input
              type="radio"
              name={question.questionText}
              id={option.optionID}
              onChange={() => setResposta(option.optionID)}
              required
              checked={resposta === option.optionID}
            />
            {option.optionText}
          </label>
        ))}
      </div>
      {!resposta ? (
        <button type="submit" disabled>
          Verificar
        </button>
      ) : resposta && !nextButton ? (
        <button type="submit">Verificar</button>
      ) : (
        resposta &&
        nextButton &&
        (quizState.questionIndex < totalQuestions ? (
          <button type="button" onClick={(e) => nextQuestion(e)}>Próxima</button>
        ) : (
          quizState.questionIndex === totalQuestions && (
            <button type="button" onClick={() => dispatch({ type: "FINISH" })}>
              Finalizar
            </button>
          )
        ))
      )}
    </form>
  );
};

export default Question;
