import { createContext, useReducer } from "react";

const STAGES = ["START", "PLAYING", "END"];

const initialState = {
  gameStage: STAGES[0],
  questionIndex: 0,
};

const quizStatesReducer = (state, action) => {
  switch (action.type) {
    case "PLAY":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    case "FINISH":
      return {
        gameStage: STAGES[2],
        questionIndex: 0,
      };
    case "START":
      return initialState;
    case "NEXT_QUESTION":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };
    default:
      return state;
  }
};

export const QuizStatesContext = createContext();

export const QuizStatesProvider = ({ children }) => {
  const value = useReducer(quizStatesReducer, initialState);
  return (
    <QuizStatesContext.Provider value={value}>
      {children}
    </QuizStatesContext.Provider>
  );
};
