import React from "react";
import { shallow } from "enzyme";
import Answer from "../Answer";

describe("Answer", () => {
  let answer;

  beforeEach(() => {
    answer = shallow(<Answer />);
  });

  it("renders the answers", () => {
    shallow(<Answer />);
  });
});
