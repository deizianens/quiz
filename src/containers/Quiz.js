import React from "react";
import "./Quiz.scss";
import Question from "../components/Question";
import Answer from "../components/Answer";

function Quiz() {
  return (
    <div className="container">
      <Question />
      <Answer />
    </div>
  );
}

export default Quiz;
