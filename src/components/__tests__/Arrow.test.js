import React from "react";
import { shallow } from "enzyme";
import Arrow from "../Arrow";

describe("Arrow", () => {
  let button;

  beforeEach(() => {
    button = shallow(<Arrow />);
  });

  it("renders the Button", () => {
    expect(button.find("a").length).toBe(1);
  });
});
