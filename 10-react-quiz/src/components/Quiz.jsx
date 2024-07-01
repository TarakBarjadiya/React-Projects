import { useState, useCallback } from "react";
import QUESTIONS from "../assets/questions.js";
import quizCompleteLogo from "../assets/quiz-complete.png";
import QustionTimer from "./QuestionTimer.jsx";

let QUESTION_TIMER = 10000;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuesionIndex = userAnswers.length;

  const quizIsOver = activeQuesionIndex === QUESTIONS.length;

  const handleClickAnswer = useCallback(function handleClickAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleClickAnswer(null), [handleClickAnswer]);
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
        <QustionTimer key={activeQuesionIndex} timeout={QUESTION_TIMER} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuesionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleClickAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
