import React from "react";
import { shallow } from "enzyme";
import QuestionCounter from "../QuestionCounter";

describe("QuestionCounter", () => {
  let counter;

  beforeEach(() => {
    counter = shallow(<QuestionCounter />);
  });

  it("renders the question counter", () => {
    shallow(<QuestionCounter />);
  });
});
