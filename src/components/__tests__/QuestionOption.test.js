import React from "react";
import { shallow } from "enzyme";
import QuestionOption from "../QuestionOption";

describe("QuestionOption", () => {
  let options;

  beforeEach(() => {
    options = shallow(<QuestionOption />);
  });

  it("renders the options", () => {
    let buttons = options.find("button");
    expect(buttons.length).toBe(2);
  });
});
