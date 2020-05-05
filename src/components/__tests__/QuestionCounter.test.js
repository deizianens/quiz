import React from "react";
import { shallow } from "enzyme";
import QuestionCounter from "../QuestionCounter";
import questions from "../../../__mocks__/questions.json";

describe("QuestionCounter", () => {
  let counter, props;

  beforeEach(() => {
    props = {
      questions: questions.quizQuestions,
    };

    counter = shallow(<QuestionCounter {...props} />);
  });

  it("renders the correct number of questions", () => {
    const questions = counter.find(".progress-item");
    expect(questions.length).toBe(4);
  });
});
