import { QuizStatesContext } from "./context/quizStates";
import { useContext, useEffect, useState } from "react";
// Layout
import Container from "./layout/Container";
// Components
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import End from "./components/End";

function App() {
  const [quizState, dispatch] = useContext(QuizStatesContext);
  const [questionsDB, setQuestionsDB] = useState([])

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const fetchData = await fetch('http://localhost:5000/questions')
        const data = await fetchData.json()
        setQuestionsDB(data)
      } catch (error) {
        console.log(error)
      }
    }
    asyncFetch()
  }, [])

  return (
    <div className="App">
      <Container>
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === 'START' && <Welcome />}
        {quizState.gameStage === 'PLAYING' && quizState.questionIndex <= 3 && <Quiz questionsDB={questionsDB}/>}
        {quizState.gameStage === 'END' && <End/>}
        
      </Container>
    </div>
  );
}

export default App;
