import React from "react";
import "./Quiz.scss";
import Question from "../components/Question";
import QuestionOption from "../components/QuestionOption";
import Answer from "../components/Answer";
import Arrow from "../components/Arrow";

function Quiz() {
  return (
    <div className="container">
      <Question />
      <QuestionOption />
      <Answer />
      <Arrow />
    </div>
  );
}

export default Quiz;
