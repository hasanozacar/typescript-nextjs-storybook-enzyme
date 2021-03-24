/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import CarTramer from './CarTramer';

const handleCustomButton = jest.fn()
const color = {
  orginal: "fill: rgb(126, 201, 126);",
  painted: "fill: rgb(241, 223, 62);",
  localPainted: "fill: rgb(201, 159, 126);",
  changed: "fill: rgb(230, 19, 19);",
  undoAndAttach: "fill: rgb(126, 189, 201);",
  meekAndScratch: "fill: rgb(212, 57, 111);",
};
describe('CarTramer', () => {
  const wrapper = mount(<CarTramer 
    rightBackFender={{color: color.orginal, title: "orginal"} }
    backBonnet={{ color: color.orginal, title: "orginal" }}
    leftBackFender={{ color: color.orginal, title: "orginal" }}
    rightBackDoor={{ color: color.painted, title: "painted" }}
    rightFrontDoor={{ color: color.painted, title: "painted" }}
    ceiling={{ color: color.painted, title: "painted" }}
    leftBackDoor={{ color: color.painted, title: "painted" }}
    leftFrontDoor={{ color: color.painted, title: "painted" }}
    rightFrondFender={{ color: color.painted, title: "painted" }}
    engineBonnet={{ color: color.painted, title: "painted" }}
    leftFrondFender={{ color: color.changed, title: "changed" }}
    frontBuffer={{ color: color.undoAndAttach, title: "undoAndAttach" }}
    backBuffer={{ color: color.localPainted, title: "localPainted" }}

    rightBackFenderClick={handleCustomButton}
    backBonnetClick={handleCustomButton}
    backBufferClick={handleCustomButton}
    leftBackFenderClick={handleCustomButton}
    rightBackDoorClick={handleCustomButton}
    rightFrontDoorClick={handleCustomButton}
    ceilingClick={handleCustomButton}
    leftBackDoorClick={handleCustomButton}
    leftFrontDoorClick={handleCustomButton}
    rightFrondFenderClick={handleCustomButton}
    engineBonnetClick={handleCustomButton}
    leftFrondFenderClick={handleCustomButton}
    frontBufferClick={handleCustomButton}
   />);

  it('should render without throwing an error', () => {
    expect(wrapper.find(CarTramer).length).toEqual(1);
  });
  it('should render with LeftBackFender Props', () => {
    expect(wrapper.find(CarTramer).props().leftBackFender.title).toEqual("orginal");
    wrapper.find(CarTramer).props().leftBackFenderClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(1);
  });

  it('should render with RightBackFender Props', () => {
    expect(wrapper.find(CarTramer).props().rightBackFender.color).toEqual(color.orginal);
    wrapper.find(CarTramer).props().rightBackFenderClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(2);
  });

  it('should render with BackBuffer Props', () => {
    expect(wrapper.find(CarTramer).props().backBuffer.title).toEqual("localPainted");
    wrapper.find(CarTramer).props().backBufferClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(3);
  });

  it('should render with RightBackDoor Props', () => {
    expect(wrapper.find(CarTramer).props().rightBackDoor.title).toEqual("painted");
    wrapper.find(CarTramer).props().rightBackDoorClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(4);
  });

  it('should render with RightFrontDoor Props', () => {
    expect(wrapper.find(CarTramer).props().rightFrontDoor).toEqual({ color: color.painted, title: "painted" });
    wrapper.find(CarTramer).props().rightFrontDoorClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(5);
  });

  it('should render with ceiling Props', () => {
    expect(wrapper.find(CarTramer).props().ceiling).toEqual({ color: color.painted, title: "painted" });
    wrapper.find(CarTramer).props().ceilingClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(6);
  });

  it('should render with LeftBackDoor Props', () => {
    expect(wrapper.find(CarTramer).props().leftBackDoor.title).toEqual("painted");
    wrapper.find(CarTramer).props().leftBackDoorClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(7);
  });

  it('should render with RightFrondFender Props', () => {
    expect(wrapper.find(CarTramer).props().rightFrondFender.title).toEqual("painted");
    wrapper.find(CarTramer).props().rightFrondFenderClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(8);
  });

  it('should render with EngineBonnet Props', () => {
    expect(wrapper.find(CarTramer).props().engineBonnet.title).toEqual("painted");
    wrapper.find(CarTramer).props().engineBonnetClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(9);
  });
  it('should render with leftFrondFender Props', () => {
    expect(wrapper.find(CarTramer).props().leftFrondFender.title).toEqual("changed");
    wrapper.find(CarTramer).props().leftFrondFenderClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(10);
  });
  it('should render with frontBuffer Props', () => {
    expect(wrapper.find(CarTramer).props().frontBuffer.title).toEqual("undoAndAttach");
    wrapper.find(CarTramer).props().frontBufferClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(11);
  });

  it('should render with leftFrontDoor Props', () => {
    expect(wrapper.find(CarTramer).props().leftFrontDoor.title).toEqual("painted");
    wrapper.find(CarTramer).props().leftFrontDoorClick();
    expect(handleCustomButton).toHaveBeenCalledTimes(12);
  });
  
});
