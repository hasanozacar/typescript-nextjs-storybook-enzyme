/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import LeftBackDoor from '.';
describe('CarTramer', () => {
  const wrapper = mount(<LeftBackDoor style={{
    "stopColor": "#ffdb4d",
    "stopOpacity": "1",
  }} />);

  it('should render without throwing an error', () => {
    expect(wrapper.find(LeftBackDoor).length).toEqual(1);
  });
});
