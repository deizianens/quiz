import React from "react";
import "./QuestionCounter.scss";

function QuestionCounter(props) {
  return (
    <div class="test-container">
      <ul id="progress-bar" class="entry-bookend-progress-container">
        {props.questions.map((question, index) => {
          return (
            <React.Fragment key={index}>
              <li className="progress-item progress-step fa active">
                <span class="circle progress-index">
                  <span class="index">{index + 1}</span>
                </span>
              </li>
              <li class="progress-item item-divider active">
                <span class="line-divider"></span>
              </li>
            </React.Fragment>
          );
        })}
        <li className="progress-item progress-step">
          <span class="circle progress-index">
            <span class="index">Fim</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default QuestionCounter;
