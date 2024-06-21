import { useState } from "react";
import QUESTIONS from "../assets/questions.js";
import quizCompleteLogo from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuesionIndex = userAnswers.length;

  const quizIsOver = activeQuesionIndex === QUESTIONS.length;

  function handleClickAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizCompleteLogo} alt="Quiz is Completed" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuesionIndex].answers];
  shuffledAnswers.sort(() => {
    return Math.random() - 0.5;
  });

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuesionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleClickAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
