import React from "react";
import { shallow } from "enzyme";
import Question from "../Question";

describe("Question", () => {
  let question;

  beforeEach(() => {
    question = shallow(<Question />);
  });

  it("renders the question", () => {
    let text = question.find("h3");
    expect(text.length).toBe(1);
  });
});
