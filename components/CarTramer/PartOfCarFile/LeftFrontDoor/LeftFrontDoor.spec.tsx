/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";
import LeftFrontDoor from "./index";
import { Tooltip } from "@material-ui/core";

const handleCustomButton = jest.fn();

describe("CarTramer", () => {
  const wrapper = mount(
    <LeftFrontDoor
      onClick={handleCustomButton}
      title="testTooltip"
      style={{
        stopColor: "#ffdb4d",
        stopOpacity: "1",
      }}
    />
  );

  it("should render without throwing an error", () => {
    expect(wrapper.find(LeftFrontDoor).length).toEqual(1);
  });
  it("should render with Tooltip", () => {
    expect(wrapper.find(Tooltip).props().title).toEqual("testTooltip");
  });
  it("should onclick without an error", () => {
    wrapper.find(Tooltip).props().onClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(1);
  });
});
