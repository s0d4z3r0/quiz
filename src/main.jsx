import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QuizStatesProvider } from "./context/quizStates.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizStatesProvider>
    <App />
  </QuizStatesProvider>
);
