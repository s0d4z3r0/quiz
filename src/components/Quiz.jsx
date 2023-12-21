import { useContext } from "react";
import { QuizStatesContext } from "../context/quizStates";
import Question from "../layout/Question";

const Quiz = ({ questionsDB }) => {
  const [quizState, dispatch] = useContext(QuizStatesContext);

  /**
   * Salvar no storage:
   * ID Questão
   * QuestionText
   * OptionText da Selecionada
   * OptionText da IDOptionTrue
   * Mostrar OptionText selecionada verde se resposta === IDOptionTrue e vermelho se resposta != IDOptionTrue
   * Fazer lógica de se resposta certa === optionTrue, então + 1 ponto
   */

  return (
    <div className="quiz">
      <Question
        question={questionsDB[quizState.questionIndex]}
        totalQuestions={questionsDB.length - 1}
      />
    </div>
  );
};

export default Quiz;
