import React from "react";
import { shallow } from "enzyme";
import Question from "../Question";

describe("Question", () => {
  it("renders the question", () => {
    shallow(<Question />);
  });
});
