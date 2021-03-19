/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import LeftFrontDoor from './index';
describe('CarTramer', () => {
  const wrapper = mount(<LeftFrontDoor style={{
    "stopColor": "#ffdb4d",
    "stopOpacity": "1",
  }} />);

  it('should render without throwing an error', () => {
    expect(wrapper.find(LeftFrontDoor).length).toEqual(1);
  });
});
