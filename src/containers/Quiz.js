import React from "react";
import "./Quiz.scss";
import Question from "../components/Question";
import QuestionOption from "../components/QuestionOption";
import Answer from "../components/Answer";
import Arrow from "../components/Arrow";
import QuestionCounter from "../components/QuestionCounter";

const quizQuestions = [
  {
    question:
      "Voluptate deserunt officia cillum aliquip id excepteur occaecat tempor reprehenderit laborum qui nisi elit.",
    answer: "Verdadeiro",
  },
  {
    question: "Aliquip sint occaecat dolor excepteur.",
    answers: "Falso",
  },
  {
    question:
      "Eiusmod aliqua excepteur duis fugiat anim magna nisi nisi do adipisicing.",
    answers: "Verdadeiro",
  },
];

function Quiz() {
  return (
    <React.Fragment>
      <div className="container">
        <Question />
        <QuestionOption />
        <Answer />
        <Arrow />
        <QuestionCounter questions={quizQuestions} />
      </div>
    </React.Fragment>
  );
}

export default Quiz;
